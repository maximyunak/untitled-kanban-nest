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
import { TokenPayload, TokenService } from 'src/auth/token.service';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private userService: UserService,
    private tokenService: TokenService,
  ) { }

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

  async refresh(res: Response, req: Request) {
    if (!req || !req.cookies) {
      throw new UnauthorizedException('Не удалось получить куки авторизации');
    }
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh токен не найден');
    }

    const { accessToken, accessTokenExpires } =
      await this.tokenService.refreshAccess(refreshToken);

    this.setCookies(res, 'accessToken', accessToken, accessTokenExpires);

    return accessToken;
  }

  logout(res: Response) {
    this.setCookies(res, 'accessToken', '', new Date(0));
    this.setCookies(res, 'refreshToken', '', new Date(0));
  }

  private async auth(res: Response, payload: TokenPayload) {
    const {
      refreshToken,
      accessToken,
      refreshTokenExpires,
      accessTokenExpires,
    } = await this.tokenService.generateTokens(payload);

    this.setCookies(res, 'accessToken', accessToken, accessTokenExpires);
    this.setCookies(res, 'refreshToken', refreshToken, refreshTokenExpires);

    return { accessToken };
  }

  private setCookies(res: Response, key: string, value: string, expires: Date) {
    res.cookie(key, value, {
      expires,
      httpOnly: true,
      sameSite: 'lax',
      domain: this.config.getOrThrow('COOKIES_DOMAIN'),
      secure: false,
    });
  }
}
