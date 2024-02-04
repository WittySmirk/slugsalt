import { blob, int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('user', {
    id: text('id').notNull().primaryKey(),
    googleEmail: text('googleEmail').notNull(),
    currentQuestion: text('currentQuestion').references(() => question.id),
    correct: int('correct').default(0),
    bottled: int('bottled'),
    endTime: int('endTime'),
    gpa: real('gpa')
})

const user_key = sqliteTable('user_key', {
    id: text('id').primaryKey(),
    user_id: text('user_id',).notNull().references(() => user.id),
    hashed_password: text('hashed_password'),
})

export const user_session = sqliteTable('user_session', {
    id: text('id').primaryKey(),
    user_id: text('user_id').notNull().references(() => user.id),
    active_expires: blob('active_expires', { mode: "bigint"}).notNull(),
    idle_expires: blob('idle_expires', {mode: "bigint"}).notNull()
})

export const question = sqliteTable('question', {
    id: text('id').notNull().primaryKey(),
    question: text('question').notNull(),
    answers: text('answers').notNull(),
    paragraph: text('paragraph')
})
