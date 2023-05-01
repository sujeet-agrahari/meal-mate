import { Controller, Get, Param, Post } from '@nestjs/common';
import { OrderBillService } from './order-bill.service';
import { OrderBill } from './order-bill.entity';
import { CreateOrderBillDto } from './dto/create-order-bill.dto';

@Controller('orders')
export class OrderBillController {
  constructor(private readonly orderBillService: OrderBillService) {}

  @Get('/:orderId/order-bills')
  async getOrderBills(@Param('orderId') orderId: string): Promise<OrderBill[]> {
    return this.orderBillService.getOrderBills(orderId);
  }

  @Post('/:orderId/order-bills')
  async createOrderBill(
    @Param('orderId') orderId: string,
    orderBill: CreateOrderBillDto,
  ): Promise<OrderBill> {
    return this.orderBillService.createOrderBill(orderId, orderBill);
  }
}
