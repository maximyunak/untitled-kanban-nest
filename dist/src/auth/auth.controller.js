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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("./dto/auth.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(res, registerDto) {
        return this.authService.register(res, registerDto);
    }
    login(res, loginDto) {
        return this.authService.login(res, loginDto);
    }
    logout(res) {
        return this.authService.logout(res);
    }
    refresh(req) {
        return this.authService.refresh(req);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Создание аккаунта',
        description: 'Регистрирует и выдает accessToken',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: auth_dto_1.AuthResponse,
    }),
    (0, swagger_1.ApiConflictResponse)({
        description: 'User with this email already exists',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Validation error',
        schema: {
            example: {
                statusCode: 400,
                message: [
                    'password must be shorter than or equal to 128 characters',
                    'password must be longer than or equal to 3 characters',
                    'password must be a string',
                ],
                error: 'Bad Request',
            },
        },
    }),
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Вход в аккаунт',
        description: 'Авторизация и выдает accessToken',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Неправильный логин или пароль',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: auth_dto_1.AuthResponse,
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Выход',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Обновление accessToken',
        description: 'Выдает новый accessToken',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: auth_dto_1.AuthResponse,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Не удалось получить куки авторизации',
    }),
    (0, common_1.Get)('/refresh'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map