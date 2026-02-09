import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ms } from 'src/utils/ms.util';

export type TokenPayload = {
  id: number;
  email: string;
};

@Injectable()
export class TokenService {
  private readonly JWT_REFRESH_TTL;
  private readonly REFRESH_SECRET;
  private readonly ACCESS_SECRET;
  private readonly JWT_ACCESS_TTL;

  constructor(
    private config: ConfigService,
    private jwtService: JwtService,
  ) {
    this.REFRESH_SECRET = this.config.getOrThrow<string>('REFRESH_SECRET');
    this.JWT_REFRESH_TTL = this.config.getOrThrow<string>('JWT_REFRESH_TTL');
    this.ACCESS_SECRET = this.config.getOrThrow<string>('ACCESS_SECRET');
    this.JWT_ACCESS_TTL = this.config.getOrThrow<string>('JWT_ACCESS_TTL');
  }
  async generateTokens(payload: TokenPayload) {
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.REFRESH_SECRET,
      expiresIn: this.JWT_REFRESH_TTL,
    });

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.ACCESS_SECRET,
      expiresIn: this.JWT_ACCESS_TTL,
    });

    const refreshTokenExpires = new Date(Date.now() + ms(this.JWT_REFRESH_TTL));
    const accessTokenExpires = new Date(Date.now() + ms(this.JWT_ACCESS_TTL));

    return {
      refreshToken,
      accessToken,
      refreshTokenExpires,
      accessTokenExpires,
    };
  }

  async refreshAccess(token: string) {
    const payload: TokenPayload = await this.jwtService.verifyAsync(token, {
      secret: this.REFRESH_SECRET,
    });

    const accessToken = await this.jwtService.signAsync(
      {
        id: payload.id,
        email: payload.email,
      },
      {
        secret: this.ACCESS_SECRET,
        expiresIn: this.JWT_ACCESS_TTL,
      },
    );

    const accessTokenExpires = new Date(Date.now() + ms(this.JWT_ACCESS_TTL));

    return { accessToken, accessTokenExpires };
  }

  async verifyAccess(token: string) {
    const payload: TokenPayload = await this.jwtService.verifyAsync(token, {
      secret: this.ACCESS_SECRET,
    });

    return payload;
  }
}
