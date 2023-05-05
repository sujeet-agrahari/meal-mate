import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateDishDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.0, { message: 'price must be at least 0.0' })
  @Max(999999999999.99, {
    message: 'price can not be greater than 999999999999.99',
  })
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isVeg: boolean;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.0, { message: 'rating must be at least 0.0' })
  @Max(5.0, { message: 'rating can not be greater than 5' })
  rating: number;
}
