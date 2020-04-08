<script context="module">
	import microApi from '../../api/created';

	export async function preload({ params, query }) {
		return await microApi.get('/created').then(res => {
			let createdList = res.data.contents;
			return { createdList };
		})
	}
</script>

<script>
	import Loading from '../../components/Loading.svelte'
	import { stores } from "@sapper/app";

	export let createdList;
</script>

<style>
.created:hover .created-thumb {
	opacity: 0;
}
</style>

<svelte:head>
	<title>K-NumaTech 製作</title>
</svelte:head>

<section>
	<header class="mb-2 md:mb-4">
		<h2>製作</h2>
	</header>
	<ul class="created-list max-w-screen-lg p-6 md:p-12 bg-gray-100">
		{#each createdList as create}
			<li class="mb-8 bg-white">
				<a rel='prefetch' href={`/created/${create.id}`} class="created w-full mb-8 rounded overflow-hidden shadow block relative">
					<div class="created-thumb relative w-full z-10 transition duration-300">
						<img src="{create.cover_image.url}" alt="">
					</div>
					<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
						<p class="text-lg">{create.title}</p>
						<p class="text-xs text-gray-500 mt-2">{create.tag}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

