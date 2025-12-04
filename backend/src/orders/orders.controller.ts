import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  async createOrder(
    @Body()
    body: {
      userId: string;
      items: Array<{ productId: string; name: string; quantity: number; price: number }>;
    },
  ) {
    return this.ordersService.createOrder(body);
  }

  @Get()
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    return this.ordersService.getOrder(id);
  }
}
