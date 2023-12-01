import { drizzle } from 'drizzle-orm/libsql';
import * as schema from "./schema"
import { createClient } from '@libsql/client';
import { TURSO_URL, TURSO_TOKEN } from '$env/static/private';
export const libsqlClient = createClient({
    url: TURSO_URL,
    authToken: TURSO_TOKEN
});

export const db = drizzle(libsqlClient, {schema});
