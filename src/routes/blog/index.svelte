<script context="module">
	import microApi from '../../api/index';

	export function preload({ params, query }) {
		return microApi.get('/blog').then(res => {
			let posts = res.data.contents
			return { posts };
		})
	}
</script>

<script>
	import { fade } from 'svelte/transition';

	export let posts;
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
	<title>Blog</title>
</svelte:head>

<div in:fade>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li> -->
		<!-- TODO: 二回クリックしないと目次が機能しないので#をつける -->
		<a rel='prefetch' href={`/blog/${post.id}#`} class="post w-full rounded overflow-hidden shadow-md flex hover:shadow-xl transition duration-500">
			<div class="w-1/3 h-auto bg-cover" style="background-image: url({post.image.url})">
			</div>
			<!-- <img class="w-full" src={post.image.url} alt="thumbnail"> -->
			<div class="w-2/3 flex flex-col">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{post.title}</div>
					<p class="truncate text-gray-500 text-sm">{post.body}</p>
				</div>
				<div class="px-6 py-4 mt-auto flex flex-wrap">
					{#each post.category.split(',') as category}
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{category}</span>
					{/each}
					<span class="ml-auto flex items-center text-gray-500 text-sm"><i class="material-icons text-sm mr-1">access_time</i>{post.createdAt.replace(/T.*Z/g, '')}</span>
				</div>
			</div>
		</a>
	{/each}
</div>
