import { eq, sql } from 'drizzle-orm';
import { db } from '$lib/drizzle/drizzle';
import { question, user } from '$lib/drizzle/schema';
import { shuffle } from "$lib/utils";

import type { PageServerLoad } from './$types';
import type { Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const curQues = await db.selectDistinct({currentQuestion: user.currentQuestion}).from(user).where(eq(user.id, session?.user.userId!));
	const cq = await db.select().from(question).where(eq(question.id, curQues[0].currentQuestion!));

	return {
		id: Number(cq[0].id) + 1,
		paragraph: cq[0].paragraph ? JSON.parse(cq[0].paragraph) : null,
		asks: cq[0].question,
		answers: shuffle(JSON.parse(cq[0].answers))
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const answerId = Number(formData.get("answers"));

		const session  = await locals.auth.validate();
		//Correct if id = 0
		if (answerId == 0) {
			//correct + 1;
			await db.update(user).set({correct: sql`correct + 1`}).where(eq(user.id, session?.user.userId!));
		}
		//currentQuestion + 1;
		await db.update(user).set({currentQuestion: sql`currentQuestion + 1`}).where(eq(user.id, session?.user.userId!));

		//refresh
	}
}
