import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { AuthChangePwDto } from './dto/auth-changepw.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    try {
      const { email, password } = authCredentialsDto;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = this.create({ email, password: hashedPassword });

      await this.save(user);

      return { email, userId: user.id, profileImageUrl: user.profileImageUrl };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async setHashedRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);
    try {
      await this.update(userId, { hashedRefreshToken });
    } catch (e) {
      throw new BadRequestException('bad request');
    }
  }

  async signOut(userId: number): Promise<void> {
    try {
      await this.update(userId, { hashedRefreshToken: null });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async changePassword(authChangePwDto: AuthChangePwDto) {
    const { id, changed } = authChangePwDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(changed, salt);

    try {
      await this.update(id, { password: hashedPassword });
    } catch (e) {
      throw new BadRequestException('bad request');
    }
  }
}
