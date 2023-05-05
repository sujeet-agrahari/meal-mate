import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderBillService } from './order-bill.service';
import { OrderBill } from './order-bill.entity';
import { CreateOrderBillDto } from './dto/create-order-bill.dto';

@Controller('orders')
export class OrderBillController {
  constructor(private readonly orderBillService: OrderBillService) {}

  @Get('/:orderId/bills')
  async getOrderBills(@Param('orderId') orderId: string): Promise<OrderBill> {
    return this.orderBillService.getOrderBill(orderId);
  }

  @Post('/:orderId/bills')
  async createOrderBill(
    @Param('orderId') orderId: string,
    @Body() orderBill: CreateOrderBillDto,
  ): Promise<OrderBill> {
    return this.orderBillService.createOrderBill(orderId, orderBill);
  }
}
