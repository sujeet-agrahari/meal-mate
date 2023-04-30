import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async getRestaurants(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async createRestaurant(restaurant: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantRepository.save(restaurant);
  }

  async getRestaurantById(restaurantId: string): Promise<Restaurant> {
    return this.restaurantRepository.findOne({
      where: {
        id: restaurantId,
      },
    });
  }

  async updateRestaurant(
    restaurantId: string,
    restaurantUpdates: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.getRestaurantById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    Object.assign(restaurant, restaurantUpdates);
    return this.restaurantRepository.save(restaurant);
  }
}
