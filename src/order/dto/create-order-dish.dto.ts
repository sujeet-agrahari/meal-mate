import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDishDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  orderId: string;

  @ApiProperty()
  @IsUUID()
  dishId: string;

  @ApiProperty()
  @IsPositive()
  quantity: number;
}
