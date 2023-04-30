import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateRestaurantDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, { message: 'Restaurant name is too short' })
  @MaxLength(20, { message: 'Restaurant name is too long' })
  name: string;

  @ApiProperty()
  @MinLength(10, { message: 'Address is too short' })
  @IsString()
  address: string;

  @ApiProperty()
  @Matches(/^[6-9]\d{9}$/, { message: 'Invalid phone number' })
  phone: string;

  @ApiProperty()
  @IsUrl({ require_tld: true })
  website: string;

  @ApiProperty()
  @IsNumber()
  @IsDecimal({ decimal_digits: '1,2' })
  @Min(0.0, { message: 'Rating must be at least 0.0' })
  @Max(5.0, { message: 'Rating can not be greater than 5' })
  rating: number;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsDate()
  createdAt?: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
