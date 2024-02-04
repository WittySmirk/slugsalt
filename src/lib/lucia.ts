import { lucia } from 'lucia';
import { libsql } from '@lucia-auth/adapter-sqlite';
import { sveltekit } from 'lucia/middleware';
import { libsqlClient } from '$lib/drizzle/drizzle';
import { dev } from '$app/environment';
import { google } from '@lucia-auth/oauth/providers';
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} from "$env/static/private";

export const auth = lucia({
	adapter: libsql(libsqlClient, {
		user: 'user',
		key: 'user_key',
		session: 'user_session'
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (data) => {
		return {
			//@ts-ignore
			googleEmail: data.googleEmail,
			//@ts-ignore
			currentQuestion: data.currentQuestion,
			//@ts-ignore
			bottled: data.bottled,
            //@ts-ignore
            gpa: data.gpa,
		}
	}
});

export const googleAuth = google(auth, {
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	redirectUri: "https://slugsalt.com/login/google/callback",
	scope: [
		"https://www.googleapis.com/auth/userinfo.email"
	]
})

export type Auth = typeof auth;
