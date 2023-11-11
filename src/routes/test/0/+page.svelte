<script lang="ts">
    import Test from "../test.svelte";
	import type { PageData } from "./$types";
    
    export let data: PageData;
</script>

<Test question={data}/>