"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const ms_util_1 = require("../utils/ms.util");
let TokenService = class TokenService {
    config;
    jwtService;
    JWT_REFRESH_TTL;
    REFRESH_SECRET;
    ACCESS_SECRET;
    JWT_ACCESS_TTL;
    constructor(config, jwtService) {
        this.config = config;
        this.jwtService = jwtService;
        this.REFRESH_SECRET = this.config.getOrThrow('REFRESH_SECRET');
        this.JWT_REFRESH_TTL = this.config.getOrThrow('JWT_REFRESH_TTL');
        this.ACCESS_SECRET = this.config.getOrThrow('ACCESS_SECRET');
        this.JWT_ACCESS_TTL = this.config.getOrThrow('JWT_ACCESS_TTL');
    }
    async generateTokens(payload) {
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: this.REFRESH_SECRET,
            expiresIn: this.JWT_REFRESH_TTL,
        });
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: this.ACCESS_SECRET,
            expiresIn: this.JWT_ACCESS_TTL,
        });
        const refreshTokenExpires = new Date(Date.now() + (0, ms_util_1.ms)(this.JWT_REFRESH_TTL));
        return {
            refreshToken,
            accessToken,
            refreshTokenExpires,
        };
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService])
], TokenService);
//# sourceMappingURL=token.service.js.map