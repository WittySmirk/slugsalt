import { relations, sql } from "drizzle-orm";
import { blob, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('user', {
    id: text('id', {length: 15}).primaryKey(),
    username: text("username", {length:15}).notNull(),
})

const user_key = sqliteTable('user_key', {
    id: text('id', {length: 255}).primaryKey(),
    user_id: text('user_id', {length: 15}).notNull().references(() => user.id),
    hashed_password: text('hashed_password', {length: 255}),
})

export const user_session = sqliteTable('user_session', {
    id: text('id', {length: 127}).primaryKey(),
    user_id: text('user_id', {length: 15}).notNull().references(() => user.id),
    active_expires: blob('active_expires', { mode: "bigint"}).notNull(),
    idle_expires: blob('idle_expires', {mode: "bigint"}).notNull()
})