import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Res,
  Req,
  ValidationPipe,
  Param,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthChangePwDto } from './dto/auth-changepw.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Request, Response } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('silent-signin')
  async silentSignIn(@Req() req: Request) {
    const { cookies } = req;
    const refreshToken = cookies['auth-cookie'];

    const { accessToken, user } = await this.authService.silentSignIn(
      refreshToken,
    );
    return accessToken ? { accessToken, user } : null;
  }

  @Get('signout')
  @HttpCode(204)
  async signout(@Req() req: Request, @Res() res: Response) {
    res.cookie('auth-cookie', null, { httpOnly: true });
    return;
  }

  @Get('extension')
  async extendAccessToken(@Req() req: Request) {
    const { cookies } = req;
    const refreshToken = cookies['auth-cookie'];
    const accessToken = await this.authService.extendAccessToken(refreshToken);
    return accessToken ? { accessToken } : null;
  }

  @Post('signup')
  @HttpCode(201)
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('signin')
  async signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const { accessToken, refreshToken, user } = await this.authService.signIn(
      authcredentialsDto,
    );
    res.cookie('auth-cookie', refreshToken, { httpOnly: true });

    return { accessToken, user };
  }

  // 기존 authcredentiasDto가 아님.
  @Put('password')
  changePassword(
    @Body(ValidationPipe) authChangePwDto: AuthChangePwDto,
  ): Promise<void> {
    return this.authService.changePassword(authChangePwDto);
  }

  // 프로필 이미지 변경
  @Put('/:userId/profile-image')
  changeProfileImage(
    @Body('profileImageUrl') profileImageUrl: string,
    @Param('userId') userId: string,
  ) {
    return this.authService.changeProfileImage(profileImageUrl, userId);
  }
}
