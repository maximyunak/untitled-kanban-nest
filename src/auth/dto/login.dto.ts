import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateAuthDto {
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}
