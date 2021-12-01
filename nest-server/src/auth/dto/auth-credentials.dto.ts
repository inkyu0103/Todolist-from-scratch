import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export class AuthCredentialsDto {
  @IsString()
  @Matches(emailRegex)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어와 숫자만 가능하도록, 추후 특수문자까지...
  @Matches(/^[a-zA-Z0-9!@#$%^&*-=]*$/)
  password: string;
}
