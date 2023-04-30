import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreateDishDto {
  @ApiProperty()
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  restaurantId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '10,2' })
  @Min(0.0, { message: 'Price must be at least 0.0' })
  @Max(999999999999.99, {
    message: 'Price can not be greater than 999999999999.99',
  })
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isVeg: boolean;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '1,2' })
  @Min(0.0, { message: 'Rating must be at least 0.0' })
  @Max(5.0, { message: 'Rating can not be greater than 5' })
  rating: number;
}
