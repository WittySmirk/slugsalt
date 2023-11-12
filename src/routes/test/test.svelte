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

<form class="bg-gray-200 w-1/2 h-1/2 rounded-xl flex justify-evenly flex-col">
	<h1 class="text-3xl font-semibold">{question.asks}</h1>
	{#each question.answers as answer, i}
		<div>
			<input
				type="radio"
				name="answers"
				id={answer.id.toString()}
				on:change={() => console.log('lol')}
				class="appearance-none peer"
			/>
			<label
				for={answer.id.toString()}
				class="text-2xl font-semibold bg-white rounded-full w-10 h-10 flex justify-center items-center peer-checked:bg-green-300 peer-checked:text-white"
				>{alpha[i].toUpperCase()}</label
			>
			<label for={answer.id.toString()} class="text-2xl">{answer.label}<br /></label>
		</div>
	{/each}
	<input
		type="submit"
		value="Next"
		class="rounded-xl bg-green-300 pl-5 pr-5 pt-2 pb-2 text-white font-semibold"
	/>
</form>
