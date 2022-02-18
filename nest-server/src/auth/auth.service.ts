import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthChangePwDto } from './dto/auth-changepw.dto';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  // 유저의 hashed 된 refresh Token과 같은지 확인
  async silentSignIn(refreshToken: string) {
    try {
      const verify = this.jwtService.verify(refreshToken, {
        secret: 'JWT_REFRESH_TOKEN_SECRET',
      });

      const user = await this.userRepository.findOne({ id: verify['id'] });

      if (user && bcrypt.compare(refreshToken, user.hashedRefreshToken)) {
        const accessToken = this.getJwtAccessToken({
          email: verify['email'],
          id: verify['id'],
        });
        return accessToken;
      } else {
        throw new UnauthorizedException();
      }
    } catch (e) {
      //redirect login
      return null;
    }
  }

  async extendAccessToken(refreshToken) {
    // refresh token이 유효하면 새로운 accessToken 발급
    // 그렇지 않으면 로그인 화면으로 redirect
    try {
      const verify = this.jwtService.verify(refreshToken, {
        secret: 'JWT_REFRESH_TOKEN_SECRET',
      });

      const accessToken = this.getJwtAccessToken({
        email: verify['email'],
        id: verify['id'],
      });

      return accessToken;
    } catch (e) {
      //redirect login
      return null;
    }
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string; refreshToken: string; userInfo: any }> {
    const { email, password } = authCredentialDto;
    const user = await this.userRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      //유저 토큰 생성 (Secret + Payload)
      const payload = { email, id: user.id };
      const accessToken = this.getJwtAccessToken(payload);
      const refreshToken = this.getJwtRefreshToken(payload);

      // update db
      await this.userRepository.setHashedRefreshToken(user.id, refreshToken);

      //set cookie
      const userInfo = {
        email: user.email,
        userId: user.id,
        profileImageUrl: user.profileImageUrl,
      };

      console.log(userInfo, 'is userInfo');

      return { accessToken, refreshToken, userInfo };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }

  async signOut(accessToken: string) {
    try {
      const result = this.jwtService.decode(accessToken);
      const id = result['id'];
      await this.userRepository.signOut(id);
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async changePassword(authChangePwDto: AuthChangePwDto): Promise<void> {
    const { id, current, changed } = authChangePwDto;
    const user = await this.userRepository.findOne({ id });

    if (user && (await bcrypt.compare(current, user.password))) {
      await this.userRepository.changePassword(authChangePwDto);
    } else {
      throw new UnauthorizedException('change password fail');
    }
  }

  @UseGuards(AuthGuard())
  async changeProfileImage(profileImageUrl: string, userId: any) {
    try {
      const user = await this.userRepository.findOne({ id: userId });
      user.profileImageUrl = profileImageUrl;
      user.save();
    } catch (e) {
      throw new Error('프로필 사진이 정상적으로 바뀌지 않았습니다.');
    }
  }

  getJwtAccessToken({ email, id }) {
    const payload = { email, id };
    return this.jwtService.sign(payload, {
      secret: 'JWT_ACCESS_TOKEN_SECRET',
      expiresIn: 24 * 60,
    });
  }

  getJwtRefreshToken({ email, id }) {
    const payload = { email, id };
    return this.jwtService.sign(payload, {
      secret: 'JWT_REFRESH_TOKEN_SECRET',
      expiresIn: 24 * 60,
    });
  }
}
