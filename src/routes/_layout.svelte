<script>
	import Nav from '../components/Nav.svelte';
	import SideNav from '../components/SideNav.svelte';
	import Footer from '../components/Footer.svelte';
	import Breacrumb from '../components/Breacrumb.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 1200px;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main class="flex">
	<div class="w-3/4 relative">
		<Breacrumb {segment}/>
		<div class="px-2">
			<slot></slot>
		</div>
	</div>
	<div class="w-1/4 pl-8">
		<SideNav />
	</div>
</main>

<Footer />