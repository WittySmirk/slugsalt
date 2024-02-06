import { auth } from "$lib/lucia";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.auth = auth.handleRequest(event);

    const session = await event.locals.auth.validate();

    if (event.url.pathname.startsWith("/test")) {
        if (!session) {
            throw redirect(303, "/");
        }
        if (event.url.pathname.startsWith("/test/finished")) {
            if (session.user.currentQuestion) {
                throw redirect(303, `/test/${session.user.bottled}`)
            }
        } else {
            if (!session.user.currentQuestion) {
                throw redirect(303, "/test/finished");
            }
        }
        if (event.url.pathname.startsWith("/test/0")) {
            if (session.user.bottled == 1) {
                throw redirect(303, "/test/1");
            }
        }
        if (event.url.pathname.startsWith("/test/1")) {
            if (session.user.bottled == 0) {
                throw redirect(303, "/test/0");
            }
        }
    } else if (event.url.pathname.startsWith("/questionnaire")) {
        if (!session || session.user.gpa) {
            throw redirect(303, "/");
        }
    } else {
        if (session) {
            if (session.user.gpa != null) {
                throw redirect(303, `/test/${session.user.bottled}`);
            }
            throw redirect(303, "/questionnaire")
        }
    }

    return await resolve(event);
}