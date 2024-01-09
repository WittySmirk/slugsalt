import type { Question } from "../routes/test/test.svelte";

export function shuffle (questions: Question[]): Question[] {
    const copy = questions.slice();
    let result = [];
    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
    return result;
}