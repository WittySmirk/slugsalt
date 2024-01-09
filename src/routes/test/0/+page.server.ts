import { eq } from 'drizzle-orm';
import { db } from '$lib/drizzle/drizzle';
import { question } from '$lib/drizzle/schema';
import { shuffle } from "$lib/utils";

import type { PageServerLoad } from './$types';
import type { Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const cq = await db.select().from(question).where(eq(question.id, session?.user.currentQuestion));

	return {
		asks: cq[0].question,
		answers: shuffle(JSON.parse(cq[0].answers))
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const answerId = Number(formData.get("answers"));
		console.log(answerId);

		//Correct if id = 0
		if (answerId !== 0) {
			//correct + 1;
		}
		//currentQuestion + 1;

		//refresh
	}
}