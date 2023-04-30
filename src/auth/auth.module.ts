import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { MemberModule } from 'src/member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Member } from 'src/member/member.entity';
import { MemberService } from 'src/member/member.service';
import { PasswordService } from './password.service';
import { JwtModule } from '@nestjs/jwt';
import { UserSubscriber } from './user.subscriber';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Member]),
    MemberModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: configService.get('JWT_SIGN_OPTION'),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    MemberService,
    PasswordService,
    UserSubscriber,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
