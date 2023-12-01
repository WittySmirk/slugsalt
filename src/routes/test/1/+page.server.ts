import type { PageServerLoad } from './$types';

async function returnData() {
    // purposefully bottleneck
    await new Promise(r => setTimeout(r, 1000))
    return {
        asks: "What is ___?",
        answers: [
			{ id: 0, label: 'AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIA AWIUAWFUHAWFUHIAWW AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIAW AWIUAWFUHAWFUHIAW' },
            { id: 1, label: "AIOFAQWIOFAWIFOHFI" },
            { id: 2, label: "WUHFAFWUHFWFHU IA" },
            { id: 3, label: "NVKJNAFNKWJAQFAWJKF" },
        ]
    }
}

export const load: PageServerLoad = async ({ params }) => {
	
	return await returnData();
};
