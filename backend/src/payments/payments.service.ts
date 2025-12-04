import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(
    private prisma: PrismaService,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  async processPayment(data: {
    orderId: string;
    amount: number;
    paymentMethod: string;
  }) {
    // Simulate payment processing
    const isSuccess = Math.random() > 0.2; // 80% success rate

    const payment = await this.prisma.payment.create({
      data: {
        orderId: data.orderId,
        amount: data.amount,
        paymentMethod: data.paymentMethod,
        status: isSuccess ? 'completed' : 'failed',
        transactionId: isSuccess ? `TXN-${Date.now()}` : null,
      },
    });

    // Update order status
    await this.prisma.order.update({
      where: { id: data.orderId },
      data: { status: isSuccess ? 'paid' : 'failed' },
    });

    // Emit payment event
    this.natsClient.emit('payment.processed', {
      orderId: data.orderId,
      paymentId: payment.id,
      status: payment.status,
      transactionId: payment.transactionId,
    });

    return payment;
  }

  async getPayment(orderId: string) {
    return this.prisma.payment.findUnique({
      where: { orderId },
      include: {
        order: {
          include: {
            items: true,
          },
        },
      },
    });
  }

  async getAllPayments() {
    return this.prisma.payment.findMany({
      include: {
        order: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
