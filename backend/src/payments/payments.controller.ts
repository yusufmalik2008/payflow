import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  // Listen to order.created event from NATS
  @EventPattern('order.created')
  async handleOrderCreated(data: any) {
    console.log('📦 Order created event received:', data.orderId);
    console.log('💳 Auto-processing payment...');
    
    // Automatically process payment when order is created
    await this.paymentsService.processPayment({
      orderId: data.orderId,
      amount: data.totalAmount,
      paymentMethod: 'credit_card', // Default payment method
    });
  }

  @Post()
  async processPayment(
    @Body()
    body: {
      orderId: string;
      amount: number;
      paymentMethod: string;
    },
  ) {
    return this.paymentsService.processPayment(body);
  }

  @Get()
  async getAllPayments() {
    return this.paymentsService.getAllPayments();
  }

  @Get('order/:orderId')
  async getPaymentByOrder(@Param('orderId') orderId: string) {
    return this.paymentsService.getPayment(orderId);
  }
}
