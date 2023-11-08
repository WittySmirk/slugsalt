<script lang="ts">
   let question = "What is ____";
   let answers = ["WAIUHOFAUIHWFUHIFWHUI", "WAFYGUAWFYGUFAWYUGFYGUAW", "AWYGUFAYGUFWYGUAFWYGU", "WGUAIFUIGAWFIUGHAFWIUGH"];
</script>

<form>
    <h1>{question}</h1>
    {#each answers as answer, i}
        <input type="radio" name="answers" id={i.toString()}/>
        <label for={i.toString()}>{answer}</label><br/>
    {/each}
</form>