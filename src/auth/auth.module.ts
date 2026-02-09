import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenService } from './token.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenService],
  imports: [JwtModule, UserModule],
  exports: [TokenService],
})
export class AuthModule {}
