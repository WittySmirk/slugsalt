import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
		asks: 'What is ___?',
		answers: [
			{ id: 0, label: 'AWIUAWFUHAWFUHIAW' },
			{ id: 1, label: 'AIOFAQWIOFAWIFOHFI' },
			{ id: 2, label: 'WUHFAFWUHFWFHU IA' },
			{ id: 3, label: 'NVKJNAFNKWJAQFAWJKF' }
		]
	};
};
