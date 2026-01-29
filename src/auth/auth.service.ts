import { Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async register(registerDto: RegisterDto) {
		const { password } = registerDto;
		const hashPassword = await bcrypt.hash(password, 10);
		registerDto.password = hashPassword;
		const user = await this.prisma.user.create({
			data: registerDto,
		});

		return user;
	}

	findAll() {
		return `This action returns all auth`;
	}

	findOne(id: number) {
		return `This action returns a #${id} auth`;
	}

	update(id: number) {
		return `This action updates a #${id} auth`;
	}

	remove(id: number) {
		return `This action removes a #${id} auth`;
	}
}
