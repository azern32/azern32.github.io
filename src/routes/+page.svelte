<script>
	import Hero from '../components/content/Hero.svelte';
	import MainContent from '../components/content/MainContent.svelte';
	import Drawer from '../components/drawer/Drawer.svelte';
	import SidebarItems from '../components/drawer/SidebarItems.svelte';
	import NavsList from '../components/general/NavsList.svelte';
	import Navbar from '../components/navbar/Navbar.svelte';
</script>

<Drawer>
	<span slot="sidebar">
		<SidebarItems>
			<NavsList />
		</SidebarItems>
	</span>
	<Navbar>
		<NavsList />
	</Navbar>
	<MainContent>
		<Hero />
		<div>sayaa</div>
		<div>sayaa</div>
		<div>sayaa</div>
		<div>sayaa</div>
		<div>sayaa</div>
	</MainContent>
</Drawer>
