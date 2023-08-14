<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		let { gameContainer } = await import('$lib/games/renderer');
		// gameContainer.eventMode = 'static';
		console.log(gameContainer);

		console.log(document.getElementsByTagName('canvas'));
	});
</script>

<canvas />
