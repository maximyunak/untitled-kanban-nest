"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = Authorization;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guards/auth.guard");
function Authorization() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_guard_1.JwtGuard));
}
//# sourceMappingURL=authorization.decorator.js.map