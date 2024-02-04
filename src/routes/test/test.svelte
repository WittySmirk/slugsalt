<script lang="ts" context="module">
	interface ptype {
		title: string;
		paragraph: string;
	}
	export interface Question {
		id: number;
		paragraph: ptype | null;
		asks: string;
		endTime: number;
		answers: {
			id: number;
			label: string;
		}[];
	}
</script>

<script lang="ts">
	import { alpha } from '$lib/misc';
	import { onMount } from 'svelte';
	import { header, bottled } from '../+layout.svelte';
	import { goto } from '$app/navigation';
	export let question: Question;

	let painted = true;
	let shift = true;
	let andThen = true;
	let timeLeft: number = question.endTime - new Date().getTime() ;

	if ($bottled) {
		onMount(() => {
			painted = false;
			shift = false;
			andThen = false;
			(async () => await new Promise((r) => setTimeout(r, 6000)))().then(() => {
				painted = true;
				(async () => await new Promise((r) => setTimeout(r, 500)))().then(() => {
					shift = true;
					(async () => await new Promise((r) => setTimeout(r, 500)))().then(() => {
						andThen = true;
					});
				});
			});
		});
	}
	onMount(() => {
		timeLeft= question.endTime - new Date().getTime();
		header.set(
			`<h1 class="text-3xl text-center font-semibold">Slug Salt<h1>
				<h1 class="text-xl font-semibold absolute top-0 mt-10">Current Question: ${
					question.id
				}</h1> <h1 class="text-xl font-semibold absolute right-0 mr-10 top-0 mt-10">Time Left: 
					${
						(Math.round(timeLeft / 60000) ? Math.round(timeLeft / 60000) : '00') +
						':' +
						(Math.round((timeLeft / 1000) % 60) >= 10
							? Math.round((timeLeft / 1000) % 60)
							: '0' + Math.round((timeLeft / 1000) % 60))
					}
				`
		);

		const interval = setInterval(() => {
			timeLeft = question.endTime - new Date().getTime();
			header.set(
				`<h1 class="text-3xl text-center font-semibold">Slug Salt<h1>
				<h1 class="text-xl font-semibold absolute top-0 mt-10">Current Question: ${
					question.id
				}</h1> <h1 class="text-xl font-semibold absolute right-0 mr-10 top-0 mt-10">Time Left: 
					${
						(Math.round(timeLeft / 60000) ? Math.round(timeLeft / 60000) : '00') +
						':' +
						(Math.round((timeLeft / 1000) % 60) >= 10
							? Math.round((timeLeft / 1000) % 60)
							: '0' + Math.round((timeLeft / 1000) % 60))
					}
				`
			);
		}, 1000);
		return () => clearInterval(interval);
	});

	function DelayedCheck(node: HTMLLabelElement) {
		if ($bottled == true) {
			node.onclick = async (e) => {
				e.preventDefault();
				await new Promise((r) => setTimeout(r, 1000));
				//@ts-ignore
				document.getElementById(node.attributes[0].value).checked = true;
			};
		}
		return;
	}
</script>

{#if painted}
	{#if timeLeft >= 0}
		{#if andThen}
			{#if question.paragraph}
				<div class="w-1/2 h-3/4 mb-12 mr-10 ml-10 bg-slate-50 overflow-y-auto pl-5 pr-5 rounded-xl">
					<h1 class="text-center font-bold text-3xl">
						{question.paragraph.title}
					</h1>
					<div class="indent-5">
						{@html question.paragraph.paragraph}
					</div>
				</div>
			{/if}
		{/if}
		<form class="w-3/4 h-3/4 mb-2 rounded-xl flex justify-evenly flex-col relative" method="POST" action="?/next">
			<h1 class="text-3xl font-semibold break-words w-full">{question.asks}</h1>
			{#each question.answers as answer, i}
				{#if shift}
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
							class="text-2xl font-semibold bg-white outline outline-2 rounded-full w-10 h-10 flex justify-center items-center peer-checked:bg-red-400 peer-checked:text-white mr-5"
							use:DelayedCheck>{alpha[i].toUpperCase()}</label
						>
						<label for={answer.id.toString()} class="text-2xl break-words w-full" use:DelayedCheck
							>{answer.label}<br /></label
						>
					</div>
				{/if}
			{/each}
			<input
				type="submit"
				value="Next"
				class="text-3xl absolute w-min h-min bottom-0 right-0 mr-10 rounded-xl bg-red-400 pl-5 pr-5 pt-2 pb-2 text-white font-semibold"
			/>
		</form>
	{:else}
		<form
			class="w-3/4 h-3/4 bg-slate-50 rounded-xl flex justify-evenly items-center flex-col relative"
			method="POST"
			action="?/time"
		>
			<h1 class="text-3xl font-bold">Time has run out for the test!</h1>
			<input
				type="submit"
				value="Ok"
				class="w-min h-min text-3xl rounded-xl bg-red-400 pl-5 pr-5 pt-2 pb-2 text-white font-semibold"
			/>
		</form>
	{/if}
{/if}
