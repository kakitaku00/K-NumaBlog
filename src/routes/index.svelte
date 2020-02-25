<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import TopLoadingTitle from '../components/TopLoadingTitle.svelte'

	let isLoading = true;

	function topLoading() {
		setTimeout(() => {
			isLoading = false
		}, 3000);
	}

	onMount(() => {
		topLoading()
	})
</script>

<svelte:head>
	<title>K-NumaTech HOME</title>
</svelte:head>

<p class="mb-4">Comming Soon ... </p>
<p>Go to <a href="blog" class="text-teal-500 underline">My BLOG</a></p>

<div class="flex mb-4" in:fade>

</div>
{#if isLoading}
	<TopLoadingTitle />
{/if}
