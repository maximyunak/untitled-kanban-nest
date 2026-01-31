import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private config: ConfigService,
    private jwtService: JwtService,
  ) {}
  generateTokens(payload) {
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.config.get('REFRESH_SECRET'),
      expiresIn: this.config.get('JWT_REFRESH_TTL'),
    });

    const accessToken = this.jwtService.sign(payload, {
      secret: this.config.get('ACCESS_SECRET'),
      expiresIn: this.config.get('JWT_ACCESS_TTL'),
    });

    return {
      refreshToken,
      accessToken,
    };
  }
}
