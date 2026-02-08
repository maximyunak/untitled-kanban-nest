import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from 'src/auth/token.service';
import { Request } from 'express';
export declare const cookieExtractor: (req: Request) => string | null;
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    private config;
    constructor(userService: UserService, config: ConfigService);
    validate(payload: TokenPayload): Promise<{
        email: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
