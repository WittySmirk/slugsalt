<script lang="ts" context="module">
	export interface Question {
		asks: string;
		answers: {
			id: number;
			label: string;
		}[];
	}
</script>

<script lang="ts">
	import { alpha } from '$lib/misc';
	export let question: Question;
</script>

<form class="w-3/4 h-3/4 rounded-xl flex justify-evenly flex-col relative">
	<h1 class="text-3xl font-semibold break-words w-full">{question.asks}</h1>
	{#each question.answers as answer, i}
		<div class="inline-flex">
			<input
				type="radio"
				name="answers"
				id={answer.id.toString()}
				class="appearance-none peer"
			/>
			<label
				for={answer.id.toString()}
				class="text-2xl font-semiboldbg-white outline outline-2 rounded-full w-10 h-10 flex justify-center items-center peer-checked:bg-green-400 peer-checked:text-white mr-5"
				>{alpha[i].toUpperCase()}</label
			>
			<label for={answer.id.toString()} class="text-2xl break-words w-full">{answer.label}<br /></label>
		</div>
	{/each}
	<input
		type="submit"
		value="Next"
		class="text-3xl absolute w-min h-min bottom-0 right-0 rounded-xl bg-green-400 pl-5 pr-5 pt-2 pb-2 text-white font-semibold"
	/>
</form>
