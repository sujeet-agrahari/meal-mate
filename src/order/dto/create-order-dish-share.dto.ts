import { ValidateNested, IsArray, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { IsUUID } from 'class-validator';

class Member {
  @IsUUID()
  id: string;
}

export class CreateOrderDishShareDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Member)
  members: Member[];
}
