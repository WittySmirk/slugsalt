<script>
	import '../app.postcss';
</script>

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
</style>
