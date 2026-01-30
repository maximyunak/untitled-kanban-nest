import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TokenService {
    private config;
    private jwtService;
    private prisma;
    constructor(config: ConfigService, jwtService: JwtService, prisma: PrismaService);
    generateTokens(payload: any): {
        accessToken: string;
        refreshToken: string;
    };
    saveTokens(userId: number, token: string): Promise<{
        token: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
}
