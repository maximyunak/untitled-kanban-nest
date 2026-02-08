import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthResponse } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // swagger
  @ApiOperation({
    summary: 'Создание аккаунта',
    description: 'Регистрирует и выдает accessToken',
  })
  @ApiOkResponse({
    type: AuthResponse,
  })
  @ApiConflictResponse({
    description: 'User with this email already exists',
  })
  @ApiBadRequestResponse({
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
  })
  // request
  @Post('/register')
  register(
    @Res({ passthrough: true }) res: Response,
    @Body() registerDto: RegisterDto,
  ) {
    return this.authService.register(res, registerDto);
  }

  // swagger
  @ApiOperation({
    summary: 'Вход в аккаунт',
    description: 'Авторизация и выдает accessToken',
  })
  @ApiUnauthorizedResponse({
    description: 'Неправильный логин или пароль',
  })
  @ApiOkResponse({
    type: AuthResponse,
  })
  @HttpCode(HttpStatus.OK)
  // request
  @Post('/login')
  login(@Res({ passthrough: true }) res: Response, @Body() loginDto: LoginDto) {
    return this.authService.login(res, loginDto);
  }

  @ApiOperation({
    summary: 'Выход',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('/logout')
  logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }

  @ApiOperation({
    summary: 'Обновление accessToken',
    description: 'Выдает новый accessToken',
  })
  @ApiOkResponse({
    type: AuthResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Не удалось получить куки авторизации',
  })
  @Get('/refresh')
  refresh(
    @Res({
      passthrough: true,
    })
    res: Response,
    @Req()
    req: Request,
  ) {
    return this.authService.refresh(res, req);
  }
}
