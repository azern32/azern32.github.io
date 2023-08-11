<script>
	export let title = 'Title';
	/** @type {string} id */
	export let id;
</script>

<div {id} class="p-4 flex flex-col">
	<!-- Judul -->
	<div class="flex flex-col">
		<h4 class="text-2xl">
			{title}
		</h4>
		<span class="border-0 bg-gradient-to-tr from-blue-500 to-violet-500 w-full h-[1px]" />
	</div>

	<!-- Content -->
	<div>
		<slot />
	</div>
</div>
