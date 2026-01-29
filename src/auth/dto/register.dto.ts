import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength,
} from "class-validator";

export class RegisterDto {
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	password: string;

	@IsString()
	@IsNotEmpty()
	firstName: string;

	@IsString()
	@IsNotEmpty()
	lastName: string;

	@IsString()
	@IsOptional()
	patronymic: string;
}
