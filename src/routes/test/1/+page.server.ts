import { db } from '$lib/drizzle/drizzle';
import { question } from '$lib/drizzle/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

async function returnData(locals: App.Locals) {
    const session = await locals.auth.validate();
    const cq = await db.select().from(question).where(eq(question.id, session?.user.currentQuestion));
    // purposefully bottleneck
    await new Promise(r => setTimeout(r, 1000))
    return {
        asks: cq[0].question,
        answers: JSON.parse(cq[0].answers)
    }
}

export const load: PageServerLoad = async ({ locals }) => {
	return await returnData(locals);
};
