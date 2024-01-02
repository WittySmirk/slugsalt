import { eq } from 'drizzle-orm';
import { db } from '$lib/drizzle/drizzle';
import { question } from '$lib/drizzle/schema';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const cq = await db.select().from(question).where(eq(question.id, session?.user.currentQuestion));
	console.log(JSON.parse(cq[0].answers));

	return {
		asks: cq[0].question,
		answers: JSON.parse(cq[0].answers)
	}
};
