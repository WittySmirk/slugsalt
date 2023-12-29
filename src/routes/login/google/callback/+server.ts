import { auth, googleAuth } from '$lib/lucia';
import { OAuthRequestError } from '@lucia-auth/oauth';
import { eq } from 'drizzle-orm';
import { db } from '$lib/drizzle/drizzle';
import { white_list } from '$lib/drizzle/schema.js';

declare class WHITELISTERROR extends Error {
	request: Request;
	response: Response;
	message: "USER NOT PERMITTED VIA WHITELIST";
	constructor(request: Request, response: Response);
}

export const GET = async ({ url, cookies, locals }) => {
	const session = await locals.auth.validate();
	if (session) {
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	}

	const storedState = cookies.get('google_oauth_state');
	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	if (!storedState || !state || storedState !== state || !code) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const { getExistingUser, googleUser, createUser } = await googleAuth.validateCallback(code);

		const getUser = async () => {
			const permitted = await db.select().from(white_list).where(eq(white_list.googleEmail, googleUser.email!));
			if (!permitted[0]) {
				throw WHITELISTERROR;
			}
			console.log(permitted[0].bottled)
			const existingUser = await getExistingUser();
			if (existingUser) return existingUser;
			const user = await createUser({
				attributes: {
					googleEmail: googleUser.email,
					bottled: permitted[0].bottled,
				}
			});
			return user;
		};
		const user = await getUser();

		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});

		locals.auth.setSession(session);

		return new Response(null, {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	} catch (e) {
		if (e instanceof OAuthRequestError) {
			return new Response(null, {
				status: 400
			});
		}
		else if(e instanceof WHITELISTERROR) {
			return new Response(null, {
				status: 403
			})
		}

		return new Response(null, {
			status: 500
		});
	}
};
