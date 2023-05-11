<script>
    import { renderer } from "../games/dodge/main_loop";
    import { onMount } from "svelte";

    onMount(()=>{
        // console.log(document.getElementById('game'));
        // @ts-ignore
        document.getElementById('game').appendChild(renderer.view)
    })
</script>

<div id="game">

</div>