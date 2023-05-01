import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDishDto {
  @ApiProperty()
  @IsUUID()
  orderId: string;

  @ApiProperty()
  @IsUUID()
  dishId: string;

  @ApiProperty()
  @IsPositive()
  quantity: number;
}
