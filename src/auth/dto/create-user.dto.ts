import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsEmail,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  ValidateNested,
} from 'class-validator';
import { CreateMemberDto } from 'src/member/dto/create-member.dto';
import { Member } from 'src/member/member.entity';

export class CreateUserDto {
  @IsOptional()
  @ApiProperty()
  @IsUUID()
  id?: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  password: string;

  @ValidateNested()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => CreateMemberDto)
  member: Member;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  updatedAt?: Date;
}
