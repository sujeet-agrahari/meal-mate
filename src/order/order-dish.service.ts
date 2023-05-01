import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDishDto } from './dto/create-order-dish.dto';
import { OrderDish } from './order-dish.entity';

@Injectable()
export class OrderDishService {
  constructor(
    @InjectRepository(OrderDish)
    private readonly orderDishRepository: Repository<OrderDish>,
  ) {}

  async createOrderDish(orderDish: CreateOrderDishDto): Promise<OrderDish> {
    return this.orderDishRepository.save(orderDish);
  }

  async getOrderDish(orderId: string): Promise<OrderDish> {
    return this.orderDishRepository.findOne({
      where: {
        id: orderId,
      },
      relations: ['dish'],
    });
  }
}
