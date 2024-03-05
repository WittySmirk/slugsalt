import { db } from "$lib/drizzle/drizzle";
import { user } from "$lib/drizzle/schema";
import { redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";
import { eq } from "drizzle-orm";

export const actions: Actions = {
    reset: async ({ locals }) => {
        const session = await locals.auth.validate();
        await db.update(user).set({ currentQuestion: "0", endTime: null, correct: 0 }).where(eq(user.id, session?.user.userId!))
        throw redirect(303, "/");
    }
}