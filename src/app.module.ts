import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { KanbanModule } from './kanban/kanban.module';

@Module({
  imports: [
    // core
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    // auth
    AuthModule,
    // domains
    UserModule,
    KanbanModule,
  ],
})
export class AppModule {}
