import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsUUID()
  mealGroupId: string;

  @ApiProperty()
  @IsUUID()
  restaurantId: string;
}
