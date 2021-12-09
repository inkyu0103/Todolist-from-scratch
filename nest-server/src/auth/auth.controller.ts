import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
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
    //@Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    /*const { accessToken, refreshToken } = await this.authService.signIn(
      authcredentialsDto,
    );*/
    //res.cookie('auth-cookie', refreshToken, { httpOnly: true });
    return this.authService.signIn(authcredentialsDto);
  }

  // 기존 authcredentiasDto가 아님.
  @Put('password')
  changePassword(
    @Body(ValidationPipe) authChangePwDto: AuthChangePwDto,
  ): Promise<void> {
    return this.authService.changePassword(authChangePwDto);
  }
  @Get('silent-login')
  silentSignIn(@Req() req) {
    const { cookies } = req;
    const refreshToken = cookies['auth-cookie'];

    return this.authService.silentSignIn(refreshToken);
  }
}
