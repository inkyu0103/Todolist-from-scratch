import { IsNumber, IsString } from 'class-validator';

export class AuthChangePwDto {
  @IsNumber()
  id: number;

  @IsString()
  current: string;

  @IsString()
  changed: string;
}
