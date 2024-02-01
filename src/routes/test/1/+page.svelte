<script lang="ts">
	import { bottled } from "../../+layout.svelte";
    import Test from "../test.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;

    bottled.set(true);
</script>

<Test question={data} />