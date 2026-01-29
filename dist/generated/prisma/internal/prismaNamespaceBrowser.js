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
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokensOrderByRelevanceFieldEnum = exports.TaskOrderByRelevanceFieldEnum = exports.ColumnOrderByRelevanceFieldEnum = exports.BoardOrderByRelevanceFieldEnum = exports.UserOrderByRelevanceFieldEnum = exports.NullsOrder = exports.SortOrder = exports.RefreshTokensScalarFieldEnum = exports.UserBoardsScalarFieldEnum = exports.TaskScalarFieldEnum = exports.ColumnScalarFieldEnum = exports.BoardScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    User: 'User',
    Board: 'Board',
    Column: 'Column',
    Task: 'Task',
    userBoards: 'userBoards',
    refreshTokens: 'refreshTokens'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    patronymic: 'patronymic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BoardScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ColumnScalarFieldEnum = {
    id: 'id',
    name: 'name',
    position: 'position',
    boardId: 'boardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TaskScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isCompleted: 'isCompleted',
    position: 'position',
    deadline: 'deadline',
    creatorId: 'creatorId',
    assigneeId: 'assigneeId',
    columnId: 'columnId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserBoardsScalarFieldEnum = {
    userId: 'userId',
    boardId: 'boardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefreshTokensScalarFieldEnum = {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.UserOrderByRelevanceFieldEnum = {
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    patronymic: 'patronymic'
};
exports.BoardOrderByRelevanceFieldEnum = {
    name: 'name',
    description: 'description'
};
exports.ColumnOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.TaskOrderByRelevanceFieldEnum = {
    name: 'name',
    description: 'description'
};
exports.refreshTokensOrderByRelevanceFieldEnum = {
    token: 'token'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map