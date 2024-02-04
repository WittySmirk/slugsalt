import { db } from "$lib/drizzle/drizzle";
import { user } from "$lib/drizzle/schema";
import { eq } from "drizzle-orm";

import { redirect, fail } from "@sveltejs/kit";

import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({request, locals}) => {
        const formdata = await request.formData();
        const GPA = formdata.get("GPA");
        const session = await locals.auth.validate();
        const formTest = /^\d+(\.\d+)?$/; // Regex for floating point and not integer

        if (!(formTest.test(GPA!.toString()) && Number(GPA) <= 4  && Number(GPA) >  0)) {
            // If regex fails and 0 !<= GPA !<= 4 then tell the user and don't inject 
            return fail(400, { GPA, wrongType: true });
        }
        
	    await db.update(user).set({gpa: Number(GPA)}).where(eq(user.id, session?.user.userId!));
        throw redirect(303, "/")
        // refresh
    }
}
