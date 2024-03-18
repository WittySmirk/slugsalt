<script lang="ts">
	import { header } from './+layout.svelte';
	header.set(`<h1 class="text-3xl text-center font-semibold">Slug Salt<h1>`);
</script>

<div class="flex-col text-center">
	<a
		href="/login/google"
		class="mb-5 bg-red-400 text-white text-3xl rounded-lg border-none pl-10 pr-10 pt-3 pb-3 font-bold"
		>Log In</a
	>
	<p class="mt-5 text-2xl">Or <a class="font-semibold" href="/about">Learn More</a></p>
</div>
