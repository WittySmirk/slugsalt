<script lang="ts">
    let question = {
        asks: "What is ___?",
        answers: [
            { id: 0, label: "AWIUAWFUHAWFUHIAW"},
            { id: 1, label: "AIOFAQWIOFAWIFOHFI"},
            { id: 2, label: "WUHFAFWUHFWFHU IA"},
            { id: 3, label: "NVKJNAFNKWJAQFAWJKF"},
        ]
    }
</script>

<form>
    <h1>{question.asks}</h1>
    {#each question.answers as answer}
        <input type="radio" name="answers" id={answer.id.toString()}/>
        <label for={answer.id.toString()}>{answer.label}</label><br/>
    {/each}
    <input type="submit" />
</form>