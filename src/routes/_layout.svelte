<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

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
  <div class="w-3/4">
		<slot></slot>
	</div>
  <div class="w-1/4 bg-gray-400 h-12 ml-4">
	</div>
</main>

<Footer />