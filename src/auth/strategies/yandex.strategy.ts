import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

import { Profile, Strategy } from 'passport-yandex';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    super({
      clientID: config.getOrThrow<string>('YANDEX_CLIENT_ID'),
      clientSecret: config.getOrThrow<string>('YANDEX_CLIENT_SECRET'),
      callbackURL: config.getOrThrow<string>('YANDEX_CALLBACK_URL'),
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.userService.findByYandexId(profile.id);
    if (!user) {
      return this.authService.yandexRegister(profile);
    }

    return user;
  }
}
