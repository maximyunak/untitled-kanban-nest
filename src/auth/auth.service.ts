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
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { password, email, lastName, firstName, patronymic } = registerDto;

    const existsUser = await this.userService.findByEmail(email);

    if (existsUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const { password: _, ...user } = await this.prisma.users.create({
      data: {
        email,
        password: hashPassword,
        lastName,
        firstName,
        patronymic,
      },
    });

    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Неправильный логин или пароль');
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const { refreshToken, accessToken } =
      this.tokenService.generateTokens(payload);

    const hashToken = await bcrypt.hashSync(refreshToken, 10);

    console.log(refreshToken, accessToken);
    return;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
