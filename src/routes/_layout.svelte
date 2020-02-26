<script>
	import { onMount } from 'svelte';

	import Nav from '../components/Nav.svelte';
	import SideNav from '../components/SideNav.svelte';
	import Footer from '../components/Footer.svelte';
	import Breacrumb from '../components/Breacrumb.svelte';
	import Loading from '../components/Loading.svelte'
	import TopLoadingTitle from '../components/TopLoadingTitle.svelte'

	import { topPageLoading } from '../stores/topPageLoading'
	import { stores } from "@sapper/app";
	let { preloading } = stores();

	export let segment;

	function topLoading() {
		setTimeout(() => {
			topPageLoading.set(false)
		}, 3500);
	}

	onMount(() => {
		topLoading()
	})
</script>

<style>
	main {
		max-width: 1200px;
		min-height: 300px;
	}
</style>

<Nav {segment}/>
	<main class="p-2 md:p-6 mx-auto flex relative bg-white">
		{#if $preloading}
			<Loading />
		<!-- ブログのみサイドバーを表示 -->
		{:else if segment === 'blog'}
			<div class="w-full md:w-3/4 relative">
				<Breacrumb {segment}/>
				<div class="px-2">
					<slot></slot>
				</div>
			</div>
			<div class="hidden md:block w-1/4 pl-8">
				<SideNav />
			</div>
		{:else}
			<div class="w-full relative">
				<div class="px-2">
					<slot></slot>
				</div>
			</div>
		{/if}
	</main>
<Footer />
{#if $topPageLoading}
	<TopLoadingTitle />
{/if}