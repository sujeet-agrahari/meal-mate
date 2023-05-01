import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(order: CreateOrderDto): Promise<Order> {
    return this.orderRepository.save(order);
  }

  async getOrder(orderId: string): Promise<Order> {
    return this.orderRepository.findOne({
      where: {
        id: orderId,
      },
      relations: ['orderBill', 'orderDishes', 'restaurant'],
    });
  }
}
