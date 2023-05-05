import { Module } from '@nestjs/common';
import { OrderBillController } from './order-bill.controller';
import { OrderBillService } from './order-bill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderBill } from './order-bill.entity';
import { OrderModule } from 'src/order/order.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderBill]), OrderModule, SharedModule],
  controllers: [OrderBillController],
  providers: [OrderBillService],
})
export class OrderBillModule {}
