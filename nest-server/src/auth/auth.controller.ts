import { Body, Controller, Post, Put, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthChangePwDto } from './dto/auth-changepw.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authcredentialsDto);
  }

  // 기존 authcredentiasDto가 아님.
  @Put('password')
  changePassword(
    @Body(ValidationPipe) authChangePwDto: AuthChangePwDto,
  ): Promise<void> {
    return this.authService.changePassword(authChangePwDto);
  }
}
