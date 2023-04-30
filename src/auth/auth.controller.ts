import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedRequest } from './types/authenticated-request.type';
import { ValidateLoginGuard } from './guards/validate-login.guard';
import { Public } from './guards/public.guard';

@ApiTags('Auth')
@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() authData: CreateUserDto): Promise<User> {
    return this.authService.registerUser(authData);
  }

  @UseGuards(ValidateLoginGuard)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: AuthenticatedRequest) {
    return this.authService.loginUser(req.user);
  }
}
