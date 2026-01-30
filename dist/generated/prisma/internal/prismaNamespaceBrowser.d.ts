import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Board: "Board";
    readonly Column: "Column";
    readonly Task: "Task";
    readonly userBoards: "userBoards";
    readonly refreshTokens: "refreshTokens";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly patronymic: "patronymic";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const BoardScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly creatorId: "creatorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum];
export declare const ColumnScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly position: "position";
    readonly boardId: "boardId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isCompleted: "isCompleted";
    readonly position: "position";
    readonly deadline: "deadline";
    readonly creatorId: "creatorId";
    readonly assigneeId: "assigneeId";
    readonly columnId: "columnId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const UserBoardsScalarFieldEnum: {
    readonly userId: "userId";
    readonly boardId: "boardId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserBoardsScalarFieldEnum = (typeof UserBoardsScalarFieldEnum)[keyof typeof UserBoardsScalarFieldEnum];
export declare const RefreshTokensScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RefreshTokensScalarFieldEnum = (typeof RefreshTokensScalarFieldEnum)[keyof typeof RefreshTokensScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly patronymic: "patronymic";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const BoardOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type BoardOrderByRelevanceFieldEnum = (typeof BoardOrderByRelevanceFieldEnum)[keyof typeof BoardOrderByRelevanceFieldEnum];
export declare const ColumnOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type ColumnOrderByRelevanceFieldEnum = (typeof ColumnOrderByRelevanceFieldEnum)[keyof typeof ColumnOrderByRelevanceFieldEnum];
export declare const TaskOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum];
export declare const refreshTokensOrderByRelevanceFieldEnum: {
    readonly token: "token";
};
export type refreshTokensOrderByRelevanceFieldEnum = (typeof refreshTokensOrderByRelevanceFieldEnum)[keyof typeof refreshTokensOrderByRelevanceFieldEnum];
