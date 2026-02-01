import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { TokenPayload, TokenService } from 'src/token/token.service';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async register(res: Response, registerDto: RegisterDto) {
    const { password, email, lastName, firstName, patronymic } = registerDto;

    const existsUser = await this.userService.findByEmail(email);

    if (existsUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const { password: _, ...user } = await this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
        lastName,
        firstName,
        patronymic,
      },
    });

    const payload: TokenPayload = {
      id: user.id,
      email: email,
    };

    return this.auth(res, payload);
  }

  async login(res: Response, loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Неправильный логин или пароль');
    }

    const payload: TokenPayload = {
      id: user.id,
      email: user.email,
    };

    return this.auth(res, payload);
  }

  logout(res: Response) {
    this.setCookie(res, '', new Date(0));
  }

  private async auth(res: Response, payload: TokenPayload) {
    const { refreshToken, accessToken, refreshTokenExpires } =
      await this.tokenService.generateTokens(payload);

    this.setCookie(res, refreshToken, refreshTokenExpires);

    return { accessToken };
  }

  private setCookie(res: Response, value: string, expires: Date) {
    res.cookie('refreshToken', value, {
      expires,
      httpOnly: true,
      sameSite: 'lax',
      domain: this.config.getOrThrow('COOKIES_DOMAIN'),
      secure: false,
    });
  }
}
