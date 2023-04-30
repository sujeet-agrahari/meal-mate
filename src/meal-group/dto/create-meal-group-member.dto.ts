import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsOptional, IsUUID } from 'class-validator';

export class CreateMealGroupMemberDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  mealGroupId: string;

  @ApiProperty()
  @IsUUID()
  memberId: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isRemoved: boolean;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  createdAt?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
