import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';
export declare class AuthService {
    private prisma;
    private config;
    private userService;
    private tokenService;
    constructor(prisma: PrismaService, config: ConfigService, userService: UserService, tokenService: TokenService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(loginDto: LoginDto): Promise<void>;
    findOne(id: number): string;
    update(id: number): string;
    remove(id: number): string;
}
