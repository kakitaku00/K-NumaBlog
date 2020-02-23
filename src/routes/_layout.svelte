<script>
	import Nav from '../components/Nav.svelte';
	import SideNav from '../components/SideNav.svelte';
	import Footer from '../components/Footer.svelte';
	import Breacrumb from '../components/Breacrumb.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 1200px;
	}
</style>

<Nav {segment}/>

<main class="p-2 md:p-6 mx-auto flex relative bg-white">
	<div class="w-full md:w-3/4 relative">
		<Breacrumb {segment}/>
		<div class="px-2">
			<slot></slot>
		</div>
	</div>
	<div class="hidden md:block w-1/4 pl-8">
		<SideNav />
	</div>
</main>

<Footer />