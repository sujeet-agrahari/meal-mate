import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DishService } from './dish.service';
import { Dish } from './dish.entity';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller('restaurants/:restaurantId/dishes')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  async getRestaurantDishes(
    @Param('restaurantId') restaurantId: string,
  ): Promise<Dish[]> {
    return this.dishService.getRestaurantDishes(restaurantId);
  }

  @Post()
  async createRestaurantDish(
    @Param('restaurantId') restaurantId: string,
    @Body() dish: CreateDishDto,
  ): Promise<Dish> {
    return this.dishService.createRestaurantDish(restaurantId, dish);
  }

  @Get('/:dishId')
  async getRestaurantDish(
    @Param('restaurantId') restaurantId: string,
    @Param('dishId') dishId: string,
  ): Promise<Dish> {
    return this.dishService.gerRestaurantDish(dishId, restaurantId);
  }

  @Put('/:dishId')
  async updateRestaurantDish(
    @Param('restaurantId') restaurantId: string,
    @Param('dishId') dishId: string,
    @Body() restaurantDishUpdates: UpdateDishDto,
  ): Promise<Dish> {
    return this.dishService.updateRestaurantDish(
      restaurantId,
      dishId,
      restaurantDishUpdates,
    );
  }
}
