import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { AmountType } from '../types/discount.type';
import { Column } from 'typeorm';

export class CreateOrderBillDto {
  @ApiProperty()
  @IsUUID()
  orderId: string;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '10,2' })
  @Min(0, { message: 'meal charges must be at least 0' })
  @Max(999999999999.99, {
    message: 'meal charges can not be greater than 999999999999.99',
  })
  mealCharges: number;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '10,2' })
  @Min(0, { message: 'net amount must be at least 0' })
  @Max(999999999999.99, {
    message: 'net amount can not be greater than 999999999999.99',
  })
  netAmount: number;

  @ApiProperty()
  @IsOptional()
  @IsDecimal({ decimal_digits: '8,2' })
  @Min(0, { message: 'service tax must be at least 0' })
  @Max(999999.99, {
    message: 'service tax can not be greater than 999999999999.99',
  })
  serviceCharge: number;

  @Column({ type: 'enum', enum: AmountType })
  @IsOptional()
  @ApiProperty({ enum: AmountType })
  @IsEnum(AmountType)
  discountType: AmountType;

  @Column({ type: 'enum', enum: AmountType })
  @IsOptional()
  @ApiProperty({ enum: AmountType })
  @IsEnum(AmountType)
  serviceChargeType: AmountType;

  @ApiProperty()
  @IsOptional()
  @IsDecimal({ decimal_digits: '6,2' })
  @Min(0, { message: 'tip must be at least 0' })
  @Max(9999.99, {
    message: 'tip can not be greater than 999999999999.99',
  })
  tip: number;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '4,2' })
  @Min(0, { message: 'tip must be at least 0' })
  @Max(99.99, {
    message: 'tip can not be greater than 999999999999.99',
  })
  tax: number;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '4,2' })
  @Min(0, { message: 'tip must be at least 0' })
  @Max(99.99, {
    message: 'tip can not be greater than 999999999999.99',
  })
  discount: number;

  @ApiProperty()
  @IsUUID()
  paidBy: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  paymentMethod: string;
}
