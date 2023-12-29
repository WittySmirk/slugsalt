import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session?.user.bottled == 0) {
		redirect(302, '/test/0');
	} else if(session?.user.bottled == 1) {
        redirect(302, '/test/1');
    }
};
