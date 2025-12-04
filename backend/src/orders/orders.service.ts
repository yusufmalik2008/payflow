import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  async createOrder(data: {
    userId: string;
    items: Array<{ productId: string; name: string; quantity: number; price: number }>;
  }) {
    // Calculate total amount
    const totalAmount = data.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    // Create order in database
    const order = await this.prisma.order.create({
      data: {
        userId: data.userId,
        totalAmount,
        status: 'pending',
        items: {
          create: data.items,
        },
      },
      include: {
        items: true,
      },
    });

    // Emit event to NATS - Payment service will listen to this
    this.natsClient.emit('order.created', {
      orderId: order.id,
      userId: order.userId,
      totalAmount: order.totalAmount,
      items: order.items,
    });

    return order;
  }

  async getOrder(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        items: true,
        payment: true,
      },
    });
  }

  async getAllOrders() {
    return this.prisma.order.findMany({
      include: {
        items: true,
        payment: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateOrderStatus(orderId: string, status: string) {
    return this.prisma.order.update({
      where: { id: orderId },
      data: { status },
    });
  }
}
