import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Email',
    example: 'test@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'as1',
    minLength: 3,
    maxLength: 128,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(128)
  password: string;

  @ApiProperty({
    description: 'FirstName',
    example: 'My name',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'LastName',
    example: 'My lastname',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Patronymic',
    example: 'My patronymic',
  })
  @IsString()
  @IsOptional()
  patronymic: string;
}
