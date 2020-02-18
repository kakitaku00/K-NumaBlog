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
	<div class="w-3/4 relative">
		{#if $preloading}
			<div class="w-full h-full absolute block top-0 left-0 bg-white z-50">
				<span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style="top: 50%;">
					<i class="fas fa-circle-notch fa-spin fa-2x"></i>
				</span>
			</div>
		{:else}
			<slot></slot>
		{/if}
	</div>
	<div class="w-1/4 pl-8">
		<SideNav />
	</div>
</main>

<Footer />