<script context="module">
	import { writable } from 'svelte/store';

	export const header = writable(`<h1 class="text-3xl text-center font-semibold">Slug Salt<h1>`);
	export const bottled = writable(false);
</script>
<script>
	import '../app.postcss';
	import { onMount } from 'svelte';

	let paint = false;
	onMount(() => {
		if ($bottled) {
			(async () => new Promise(r => setTimeout(r, 3000)))().then(() => {
				paint = true;
			})
		} else {
			paint = true;
		}
	});
</script>

<svelte:head>
	<title>Slug Salt</title>
</svelte:head>

{#if paint}
	<header class="ml-10 mr-10 mt-10">{@html $header}</header>
	<footer class="absolute bottom-5 w-full text-center text-gray-300">This application uses <a class="font-semibold" href="https://satsuite.collegeboard.org/media/pdf/sat-practice-test-6.pdf">released SAT practice questions</a> by the College Board</footer>
{/if}
<main class="h-screen flex justify-center items-center">
	<slot />
</main>

<style>
	:global(button) {
		cursor: pointer;
	}
	:global(label) {
		cursor: pointer;
	}
	:global(input[type='submit']) {
		cursor: pointer;
	}
	:root {
		overflow: hidden;
	}
</style>
