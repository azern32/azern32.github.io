<script>
	import '../app.css';
	import LinkedButton from '../components/general/LinkedButton.svelte';
	import Navbar from '../components/navbar/Navbar.svelte';
</script>

<div class="container mx-auto max-w-2xl">
	<Navbar>
		<LinkedButton title="About" href="about" />
		<LinkedButton title="Stacks" href="stacks" />
	</Navbar>
	<slot />
</div>
