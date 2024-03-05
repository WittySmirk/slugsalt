<script lang="ts">
	import { header } from '../../+layout.svelte';

	header.set(`<h1 class="text-3xl text-center font-semibold">Slug Salt<h1>`);
</script>

<div class="flex flex-col text-center">
	<h1 class="text-3xl font-semibold mb-5">You have succesfully finished the test! Thank you!</h1>
	<form method="POST" action="?/reset">
		<input
			class="bg-red-400 text-white text-xl rounded-lg border-none pl-10 pr-10 pt-3 pb-3 font-bold"
			type="submit"
			value="Reset your test"
		/>
	</form>
</div>
