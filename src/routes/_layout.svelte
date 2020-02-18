<script>
	import Nav from '../components/Nav.svelte';
	import SideNav from '../components/SideNav.svelte';
	import Footer from '../components/Footer.svelte';
	import { stores } from "@sapper/app";

	export let segment;

	let { preloading } = stores();
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
	<div class="w-3/4">
		{#if $preloading}
			<div>Loading</div>
		{:else}
			<slot></slot>
		{/if}
	</div>
	<div class="w-1/4 pl-8">
		<SideNav />
	</div>
</main>

<Footer />