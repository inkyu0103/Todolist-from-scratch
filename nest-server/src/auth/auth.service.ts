import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthChangePwDto } from './dto/auth-changepw.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async silentSignIn(refreshToken: string) {
    const decode = this.jwtService.decode(refreshToken);
    const user = await this.userRepository.findOne({ email: decode['email'] });
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialDto;
    const user = await this.userRepository.findOne({ email });
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('??마즌ㄴ데용?');
      //유저 토큰 생성 (Secret + Payload)
      const payload = { email, id: user.id };
      const accessToken = this.getJwtAccessToken(payload);
      const refreshToken = this.getJwtRefreshToken(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
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

  // accessToken 생성 , refreshToken 생성 로직을 따로 분리

  getJwtAccessToken({ email, id }) {
    const payload = { email, id };
    return this.jwtService.sign(payload);
  }

  getJwtRefreshToken({ email, id }) {
    const payload = { email, id };
    return this.jwtService.sign(payload, {
      secret: 'JWT_REFRESH_TOKEN_SECRET',
    });
  }
}
