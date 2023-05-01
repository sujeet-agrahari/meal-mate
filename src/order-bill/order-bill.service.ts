import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderBill } from './order-bill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderBillDto } from './dto/create-order-bill.dto';

@Injectable()
export class OrderBillService {
  constructor(
    @InjectRepository(OrderBill)
    private readonly orderBillRepository: Repository<OrderBill>,
  ) {}

  async getOrderBills(orderId: string): Promise<OrderBill[]> {
    return this.orderBillRepository.find({
      where: {
        orderId,
      },
    });
  }

  async createOrderBill(
    orderId: string,
    orderBill: CreateOrderBillDto,
  ): Promise<OrderBill> {
    return this.orderBillRepository.save({ orderId, ...orderBill });
  }
}
