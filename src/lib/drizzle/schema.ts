import { blob, int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('user', {
    id: text('id').notNull().primaryKey(),
    googleEmail: text('googleEmail').notNull(),
    currentQuestion: text('currentQuestion').references(() => question.id),
    correct: int('correct').default(0),
    bottled: int('bottled'),
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

/*export const white_list = sqliteTable('white_list', {
    googleEmail: text('googleEmail').notNull(),
    bottled: int('bottled').notNull(),
    lower: int('lower').notNull()
})*/

export const question = sqliteTable('question', {
    id: text('id').notNull().primaryKey(),
    question: text('question').notNull(),
    answers: text('answers').notNull(),
    image: text('image'),
    paragraph: text('paragraph')
})
