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
	export let question: Question;
</script>

<form>
	<h1>{question.asks}</h1>
	{#each question.answers as answer}
		<input type="radio" name="answers" id={answer.id.toString()} />
		<label for={answer.id.toString()}>{answer.label}</label><br />
	{/each}
	<input type="submit" />
</form>
