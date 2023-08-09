<script>
	export let href = '';
	export let title = '';
	export let toOtherPage = false;

	/** @param {any} target  */
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<li>
	{#if toOtherPage}
		<a {href}>
			{title}
		</a>
	{:else}
		<a href={'#' + href} on:click|preventDefault={scrollIntoView}>
			{title}
		</a>
	{/if}
</li>
