<script>
    export let idTag
    export let imageLink = ""
    export let gameName = "Game Name"
</script>

<div id={idTag} class="drop-shadow-md p-5">
    <!-- Thumbnail -->
    <div class="blur-[2px] hover:blur-none">
        <img class="rounded-lg object-cover h-32 w-56" src="{imageLink}" alt="">
    </div>

    <!-- Title -->
    <h4 class="text-lg font-semibold pt-2">
        {gameName}
    </h4>
</div>