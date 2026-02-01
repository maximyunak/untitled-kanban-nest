import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export type TokenPayload = {
    id: number;
    email: string;
};
export declare class TokenService {
    private config;
    private jwtService;
    private readonly JWT_REFRESH_TTL;
    private readonly REFRESH_SECRET;
    private readonly ACCESS_SECRET;
    private readonly JWT_ACCESS_TTL;
    constructor(config: ConfigService, jwtService: JwtService);
    generateTokens(payload: TokenPayload): Promise<{
        refreshToken: string;
        accessToken: string;
        refreshTokenExpires: Date;
    }>;
}
