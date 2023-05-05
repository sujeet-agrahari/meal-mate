import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDishShare } from './order-dish-share.entity';
import { Repository } from 'typeorm';
import { UpdateMemberDto } from 'src/member/dto/update-member.dto';
import { OrderDish } from './order-dish.entity';
import { CreateOrderDishShareDto } from './dto/create-order-dish-share.dto';
import { Member } from 'src/member/member.entity';
import { Dish } from 'src/dish/dish.entity';
import { OrderDishShareResponseDto } from './dto/order-dish-share-response.dto';

@Injectable()
export class OrderDishShareService {
  constructor(
    @InjectRepository(OrderDishShare)
    private readonly orderDishShareRepository: Repository<OrderDishShare>,
    @InjectRepository(OrderDish)
    private readonly orderDishRepository: Repository<OrderDish>,
  ) {}

  async createDishSharedMembers(
    orderId: string,
    dishId: string,
    orderDishShare: CreateOrderDishShareDto,
  ): Promise<OrderDishShare[]> {
    // Add members to the dish
    const orderDish = await this.orderDishRepository.findOne({
      where: { orderId, dishId },
    });

    if (!orderDish) {
      throw new BadRequestException('order dish not found');
    }
    const orderDishMembers = orderDishShare.members.map((orderDishMember) => ({
      orderDishId: orderDish.id,
      memberId: orderDishMember.id,
    }));
    return this.orderDishShareRepository.save(orderDishMembers);
  }

  async getDishSharedMembers(
    orderId: string,
    dishId: string,
  ): Promise<OrderDishShareResponseDto> {
    // Find the order dish
    const orderDish = await this.orderDishRepository.findOne({
      where: { orderId, dishId },
    });

    if (!orderDish) {
      throw new BadRequestException('Order dish not found');
    }

    // Find the order dish shares and related member and dish entities
    const orderDishShares = await this.orderDishShareRepository.find({
      where: { orderDishId: orderDish.id },
      relations: ['member', 'orderDish', 'orderDish.dish'],
    });

    // Map the order dish shares to an array of members
    const members = orderDishShares.map(
      (orderDishShare) => orderDishShare.member,
    );

    // Get the dish entity from the first order dish share
    const dish = orderDishShares[0].orderDish.dish;

    // Return the order dish with the members and dish properties included
    return { ...orderDish, members, dish };
  }
}
