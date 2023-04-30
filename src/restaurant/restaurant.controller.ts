import { Body, Controller, Get, Post } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getRestaurants();
  }

  @Post()
  async createRestaurant(
    @Body() restaurant: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.createRestaurant(restaurant);
  }
}
