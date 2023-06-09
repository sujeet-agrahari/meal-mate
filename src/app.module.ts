import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configSchema from './config/config-schema';
import configLoader from './config/config-loader';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishModule } from './dish/dish.module';
import { MemberModule } from './member/member.module';
import { MealGroupModule } from './meal-group/meal-group.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { OrderBillModule } from './order-bill/order-bill.module';
import { MemberBillShareModule } from './member-bill-share/member-bill-share.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    RestaurantModule,
    DishModule,
    ConfigModule.forRoot({
      load: [configLoader],
      isGlobal: true,
      validationSchema: configSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        database: configService.get('DB_NAME'),
        host: configService.get('DB_HOST'),
        password: configService.get('DB_PASSWORD'),
        username: configService.get('DB_USER'),
        type: 'postgres',
        port: configService.get('DB_PORT'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
    }),
    MemberModule,
    MealGroupModule,
    AuthModule,
    OrderModule,
    OrderBillModule,
    MemberBillShareModule,
    SharedModule,
  ],
})
export class AppModule {}
