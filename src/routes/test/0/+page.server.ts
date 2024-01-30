import { eq, sql } from 'drizzle-orm';
import { db } from '$lib/drizzle/drizzle';
import { question, user } from '$lib/drizzle/schema';
import { shuffle } from "$lib/utils";

import type { PageServerLoad } from './$types';
import type { Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const userQ = await db.query.user.findFirst({
		columns: {
			currentQuestion: true,
			endTime: true,
		},
		where: eq(user.id, session?.user.userId!),
	});
	const questionQ = await db.query.question.findFirst({
		where: eq(question.id, userQ?.currentQuestion!)
	});

	// If currentQuestion = 0, getTime add 15 minutes to it, put that in final time in db
	if (Number(questionQ!.id) == 0 && !userQ!.endTime) {
		const endTime = new Date().getTime() + 15 * 60 * 1000;
		await db.update(user).set({ endTime: endTime }).where(eq(user.id, session?.user.userId!));
	}

	return {
		id: Number(questionQ!.id) + 1,
		paragraph: questionQ!.paragraph ? JSON.parse(questionQ!.paragraph) : null,
		asks: questionQ!.question,
		endTime: userQ!.endTime,
		answers: shuffle(JSON.parse(questionQ!.answers))
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const answerId = Number(formData.get("answers"));

		const session = await locals.auth.validate();
		//Correct if id = 0
		if (answerId == 0) {
			//correct + 1;
			await db.update(user).set({ correct: sql`correct + 1` }).where(eq(user.id, session?.user.userId!));
		}
		//currentQuestion + 1;
		await db.update(user).set({ currentQuestion: sql`currentQuestion + 1` }).where(eq(user.id, session?.user.userId!));

		//refresh
	}
}
