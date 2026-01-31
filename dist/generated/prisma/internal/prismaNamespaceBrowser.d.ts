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
    readonly Users: "Users";
    readonly Boards: "Boards";
    readonly Columns: "Columns";
    readonly Tasks: "Tasks";
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
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly patronymic: "patronymic";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const BoardsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly creatorId: "creatorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BoardsScalarFieldEnum = (typeof BoardsScalarFieldEnum)[keyof typeof BoardsScalarFieldEnum];
export declare const ColumnsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly position: "position";
    readonly boardId: "boardId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ColumnsScalarFieldEnum = (typeof ColumnsScalarFieldEnum)[keyof typeof ColumnsScalarFieldEnum];
export declare const TasksScalarFieldEnum: {
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
export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum];
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
export declare const UsersOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly patronymic: "patronymic";
};
export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum];
export declare const BoardsOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type BoardsOrderByRelevanceFieldEnum = (typeof BoardsOrderByRelevanceFieldEnum)[keyof typeof BoardsOrderByRelevanceFieldEnum];
export declare const ColumnsOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type ColumnsOrderByRelevanceFieldEnum = (typeof ColumnsOrderByRelevanceFieldEnum)[keyof typeof ColumnsOrderByRelevanceFieldEnum];
export declare const TasksOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type TasksOrderByRelevanceFieldEnum = (typeof TasksOrderByRelevanceFieldEnum)[keyof typeof TasksOrderByRelevanceFieldEnum];
export declare const refreshTokensOrderByRelevanceFieldEnum: {
    readonly token: "token";
};
export type refreshTokensOrderByRelevanceFieldEnum = (typeof refreshTokensOrderByRelevanceFieldEnum)[keyof typeof refreshTokensOrderByRelevanceFieldEnum];
