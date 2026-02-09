import { Socket } from 'socket.io';
import { User } from 'generated/prisma/client';

export interface AuthenticatedSocket extends Socket {
  user?: Omit<User, 'password'>;
}
