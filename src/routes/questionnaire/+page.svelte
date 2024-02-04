<script lang="ts">
    import type { ActionData } from "./$types";
    export let form: ActionData;
</script>
<div class="flex flex-col items-center justify-between h-1/2">
    <div class="text-center ">
        <h1 class="text-4xl font-bold text-green-400 mb-2">Questionnaire</h1>
        <h2 class="text-2xl mb-5">Before you begin your test, you will need to report your GPA</h2>
        <h3 class="text-red-600">It is essential that you have already completed the <a class="text-blue-400" href="https://forms.gle/yGGXui2Pn1gWtDwC8">informed consent form</a> before you report your GPA and take the test</h3>
    </div>
    <form method="POST">
        <div class="mb-5">
            <label for="GPA" class="font-semibold text-2xl">What is your unweighted GPA?</label>
            <input class="outline rounded pl-2 text-xl ml-5" type="text" name="GPA" id="GPA" placeholder="Ex: 4.0" required />
            {#if form?.wrongType}<p class="text-red-600">The gpa {form?.GPA} needs to be inbetween 0 and 4. (Ex: 3.5, 2.0)</p>{/if}
        </div>
        <input type="submit" value="Submit" class="bg-red-400 text-white font-semibold rounded-xl pl-5 pr-5 pt-2 pb-2 text-xl" />
    </form>
</div>
