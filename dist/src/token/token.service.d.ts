import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class TokenService {
    private config;
    private jwtService;
    constructor(config: ConfigService, jwtService: JwtService);
    generateTokens(payload: any): {
        refreshToken: string;
        accessToken: string;
    };
}
