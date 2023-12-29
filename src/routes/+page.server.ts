import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => { 
    const session = await locals.auth.validate();
    console.log(session)
    if (session) {
        redirect(302, "/test/0");
    }
}