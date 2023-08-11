<script>
	export let iconLink = '';
	export let nameLink = '';
</script>

<div
	class="flex flex-col justify-center items-center gap-3 bg-white rounded-xl drop-shadow-sm w-24 m-3"
>
	<img src={iconLink} alt={nameLink} class="max-w-[100px] max-h-[100px] p-2" />
	<p class="text-neutral m-2 hyphens-auto">
		{nameLink}
	</p>
</div>
