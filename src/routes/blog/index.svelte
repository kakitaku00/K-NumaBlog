<script context="module">
	import microApi from '../../api/index';

	export async function preload({ params, query }) {
		const filters = query.filters;
		const url = !filters ? '/blog' : `/blog?filters=body[contains]${filters}`
		return await microApi.get(encodeURI(url)).then(res => {
			let posts = res.data.contents
			return { posts };
		})
	}
</script>

<script>
	import Loading from '../../components/Loading.svelte'
	import { fade } from 'svelte/transition';
	import { stores } from "@sapper/app";

	export let posts;

	function coverImage(res) {
		return res ? res.url : 'https://images.microcms-assets.io/protected/ap-northeast-1:f18fa8ff-5b5f-43d2-ac15-ec07384ec391/service/kakki-blog/media/template.jpg';
	}
</script>

<style>
.post {
	min-height: 12rem;
}

.post:hover {
	transform: translateY(-3px);
}
</style>

<svelte:head>
	<title>K-NumaTech ブログ</title>
</svelte:head>

<div in:fade>
	{#if !posts.length}
		<p>該当記事はありませんでした。</p>
	{/if}
	{#each posts as post}
		<!-- TODO: 二回クリックしないと目次が機能しないので#をつける -->
		<a rel='prefetch' href={`/blog/${post.id}`} class="post w-full mb-8 rounded overflow-hidden shadow flex flex-col md:flex-row hover:shadow-md transition duration-500">
			<div class="w-full md:w-1/3 h-40 md:h-auto bg-cover" style="background-image: url({coverImage(post.cover_image)})">
			</div>
			<!-- <img class="w-full" src={post.image.url} alt="thumbnail"> -->
			<div class="w-full md:w-2/3 flex flex-col">
				<div class="px-4 md:px-6 py-4">
					<div class="font-bold text-xl mb-2">{post.title}</div>
					<p class="truncate text-gray-500 text-sm">{post.body}</p>
				</div>
				<div class="px-4 md:px-6 pt-4 pb-3 mt-auto flex">
					<div class="flex flex-wrap items-start">
						{#each post.category.split(',') as category}
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-xs md:text-sm font-semibold text-gray-700 mr-2">{category}</span>
						{/each}
					</div>
					<div class="ml-auto mb-1 flex flex-shrink-0 self-end items-center text-gray-500 text-sm"><i class="material-icons text-sm mr-1">access_time</i>{post.createdAt.replace(/T.*Z/g, '')}</div>
				</div>
			</div>
		</a>
	{/each}
</div>