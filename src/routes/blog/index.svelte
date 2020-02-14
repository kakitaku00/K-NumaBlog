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
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div in:fade>
	<h1>Recent posts</h1>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<!-- <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li> -->
			<!-- TODO: 二回クリックしないと目次が機能しないので#をつける -->
			<li><a rel='prefetch' href={`/blog/${post.id}#`}>{post.title}</a></li>
		{/each}
	</ul>
</div>
