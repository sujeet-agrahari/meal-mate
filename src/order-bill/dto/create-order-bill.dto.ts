import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { AmountType } from '../types/discount.type';

export class CreateOrderBillDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.0, { message: 'net amount must be at least 0.0' })
  @Max(999999999999.99, {
    message: 'net amount can not be greater than 999999999999.99',
  })
  netAmount: number;

  @ApiProperty({ default: 0 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  @Min(0.0, { message: 'discount must be at least 0.0' })
  @Max(99.99, {
    message: 'discount can not be greater than 999999999999.99',
  })
  discount = 0;

  @ApiProperty()
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.0, { message: 'service charge must be at least 0.0' })
  @Max(999999999999.99, {
    message: 'service charge can not be greater than 999999999999.99',
  })
  serviceCharge = 0;

  @ApiProperty({ enum: AmountType, default: AmountType.PERCENTAGE })
  @IsOptional()
  @IsEnum(AmountType)
  discountType: AmountType = AmountType.PERCENTAGE;

  @IsOptional()
  @ApiProperty({ enum: AmountType, default: AmountType.PERCENTAGE })
  @IsEnum(AmountType)
  serviceChargeType: AmountType = AmountType.PERCENTAGE;

  @ApiProperty({ default: 0 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.0, { message: 'tip must be at least 0.0' })
  @Max(999999999999.99, {
    message: 'tip can not be greater than 999999999999.99',
  })
  tip = 0;

  @ApiProperty({ default: 0 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  @Min(0.0, { message: 'tax must be at least 0.0' })
  @Max(99.99, {
    message: 'tax can not be greater than 999999999999.99',
  })
  tax = 0;

  @ApiProperty()
  @IsUUID()
  paidBy: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  paymentMethod = 'UPI';
}
