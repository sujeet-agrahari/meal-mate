import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/auth/user.entity';

export class CreateMealGroupDto {
  @ApiProperty()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, { message: 'meal group name is too short' })
  @MaxLength(20, { message: 'meal group name is too long' })
  name: string;

  @ValidateNested()
  @Type(() => CreateUserDto)
  createdBy?: User;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  createdById?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
