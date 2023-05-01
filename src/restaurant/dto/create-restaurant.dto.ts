import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateRestaurantDto {
  @ApiProperty()
  @IsString()
  @MinLength(3, { message: 'restaurant name is too short' })
  @MaxLength(20, { message: 'restaurant name is too long' })
  name: string;

  @ApiProperty()
  @MinLength(10, { message: 'address is too short' })
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[6-9]\d{9}$/, { message: 'invalid phone number' })
  phone: string;

  @ApiProperty()
  @IsUrl({ require_tld: true })
  website: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(0.0, { message: 'rating must be at least 0.0' })
  @Max(5.0, { message: 'rating can not be greater than 5' })
  rating: number;

  @ApiProperty()
  @IsString()
  description?: string;
}
