import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { TokenService } from '../token.service';
import { AuthenticatedSocket } from 'src/kanban/types/AuthenticatedSocket.type';

@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient<AuthenticatedSocket>();

    const cookieHeader = client.handshake.headers['cookie'];
    if (!cookieHeader) return false;

    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map((el) => el.split('=')) || [],
    );

    const payload = await this.tokenService.verifyAccess(cookies.accessToken);

    const user = await this.userService.findOne(payload.id);

    client.user = user;

    return true;
  }
}
