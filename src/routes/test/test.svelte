<script lang="ts" context="module">
	interface ptype {
		title: string;
		paragraph: string;
	}
	export interface Question {
		id: number,
		paragraph: ptype | null;
		asks: string;
		answers: {
			id: number;
			label: string;
		}[];
	}
</script>

<script lang="ts">
	import { alpha } from '$lib/misc';
	import { header } from '../+layout.svelte';
	export let question: Question;

	header.update((h) => h+`<h1 class="text-xl font-semibold absolute top-0 mt-10">Current Question: ${question.id}</h1> <h1 class="text-xl font-semibold absolute right-0 mr-10 top-0 mt-10">Time Left: 00:00</h1>`)
</script>

{#if question.paragraph}
	<div class="w-1/2 h-3/4 mr-10 ml-10 bg-slate-50 overflow-y-auto pl-5 pr-5 rounded-xl">
		<h1 class="text-center font-bold text-3xl">
			{question.paragraph.title}
		</h1>
		<div class="indent-5">
			{@html question.paragraph.paragraph}
		</div>
	</div>
{/if}

<form class="w-3/4 h-3/4 rounded-xl flex justify-evenly flex-col relative" method="POST">
	<h1 class="text-3xl font-semibold break-words w-full">{question.asks}</h1>
	{#each question.answers as answer, i}
		<div class="inline-flex">
			<input
				type="radio"
				name="answers"
				id={answer.id.toString()}
				value={answer.id.toString()}
				class="appearance-none peer"
			/>
			<label
				for={answer.id.toString()}
				class="text-2xl font-semibold bg-white outline outline-2 rounded-full w-10 h-10 flex justify-center items-center peer-checked:bg-green-400 peer-checked:text-white mr-5"
				>{alpha[i].toUpperCase()}</label
			>
			<label for={answer.id.toString()} class="text-2xl break-words w-full"
				>{answer.label}<br /></label
			>
		</div>
	{/each}
	<input
		type="submit"
		value="Next"
		class="text-3xl absolute w-min h-min bottom-0 right-0 mr-10 rounded-xl bg-green-400 pl-5 pr-5 pt-2 pb-2 text-white font-semibold"
	/>
</form>