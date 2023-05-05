import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './dish.entity';
import { Repository } from 'typeorm';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { UpdateRestaurantDto } from 'src/restaurant/dto/update-restaurant.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async getRestaurantDishes(restaurantId: string): Promise<Dish[]> {
    return this.dishRepository.find({
      where: {
        restaurantId,
      },
    });
  }

  async createRestaurantDish(
    restaurantId: string,
    dish: CreateDishDto,
  ): Promise<Dish> {
    return this.dishRepository.save({ restaurantId, ...dish });
  }

  async gerRestaurantDish(dishId: string, restaurantId: string): Promise<Dish> {
    return this.dishRepository.findOne({
      where: {
        id: dishId,
        restaurantId,
      },
    });
  }

  async updateRestaurantDish(
    restaurantId: string,
    dishId: string,
    restaurantDishUpdates: UpdateRestaurantDto,
  ): Promise<Dish> {
    const restaurantDish = await this.gerRestaurantDish(dishId, restaurantId);
    if (!restaurantDish) {
      throw new NotFoundException('Restaurant dish not found');
    }
    Object.assign(restaurantDish, restaurantDishUpdates);
    return this.dishRepository.save(restaurantDishUpdates);
  }
}
