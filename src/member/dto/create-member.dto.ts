import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMemberDto {
  @ApiProperty()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsOptional()
  userId: string;

  @IsString()
  @MinLength(3, { message: 'name name is too short' })
  @MaxLength(20, { message: 'name name is too long' })
  name: string;

  @ApiProperty()
  @Matches(/^[6-9]\d{9}$/, { message: 'invalid phone number' })
  phone: string;

  @ApiProperty()
  @IsUrl()
  @IsOptional()
  profileImage?: string;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  joiningDate?: Date;
}
