import { Module } from '@nestjs/common';
import { OrderBillController } from './order-bill.controller';
import { OrderBillService } from './order-bill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderBill } from './order-bill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderBill])],
  controllers: [OrderBillController],
  providers: [OrderBillService],
})
export class OrderBillModule {}
