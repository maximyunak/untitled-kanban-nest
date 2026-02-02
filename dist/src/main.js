"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("@nestjs/config");
const swagger_util_1 = require("./utils/swagger.util");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    app.setGlobalPrefix('api');
    app.enableCors({
        credentials: true,
        origin: true,
    });
    (0, swagger_util_1.setupSwagger)(app);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.use((0, cookie_parser_1.default)(config.getOrThrow('COOKIES_SECRET')));
    await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map