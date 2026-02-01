"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
const token_service_1 = require("../token/token.service");
let AuthService = class AuthService {
    prisma;
    config;
    userService;
    tokenService;
    constructor(prisma, config, userService, tokenService) {
        this.prisma = prisma;
        this.config = config;
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async register(res, registerDto) {
        const { password, email, lastName, firstName, patronymic } = registerDto;
        const existsUser = await this.userService.findByEmail(email);
        if (existsUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const { password: _, ...user } = await this.prisma.user.create({
            data: {
                email,
                password: hashPassword,
                lastName,
                firstName,
                patronymic,
            },
        });
        const payload = {
            id: user.id,
            email: email,
        };
        return this.auth(res, payload);
    }
    async login(res, loginDto) {
        const user = await this.userService.findByEmail(loginDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (!(await bcrypt.compare(loginDto.password, user.password))) {
            throw new common_1.UnauthorizedException('Неправильный логин или пароль');
        }
        const payload = {
            id: user.id,
            email: user.email,
        };
        return this.auth(res, payload);
    }
    async refresh(req, res) {
        if (!req || !req.cookies) {
            throw new common_1.UnauthorizedException('Не удалось получить куки авторизации');
        }
        const refreshToken = req.cookies['refreshToken'];
        if (!refreshToken) {
            throw new common_1.UnauthorizedException('Refresh токен не найден');
        }
        const accessToken = this.tokenService.refreshAccess(refreshToken);
        return accessToken;
    }
    logout(res) {
        this.setCookie(res, '', new Date(0));
    }
    async auth(res, payload) {
        const { refreshToken, accessToken, refreshTokenExpires } = await this.tokenService.generateTokens(payload);
        this.setCookie(res, refreshToken, refreshTokenExpires);
        return { accessToken };
    }
    setCookie(res, value, expires) {
        res.cookie('refreshToken', value, {
            expires,
            httpOnly: true,
            sameSite: 'lax',
            domain: this.config.getOrThrow('COOKIES_DOMAIN'),
            secure: false,
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map