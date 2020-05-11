<script context="module">
	import microApi from '../../api/index';
	// 下記のapiでうまくいかない理由を探す
	// import microApi from '../../api/crated';
	export async function preload({ host, path, params, query }) {
		const res = await microApi.get(`cteated/${params.slug}`).then(res => res);
		const data = await res.data;
		let ogp = {};
		ogp.url = 'https://' + host + path
		ogp.type = 'article'
		ogp.title = data.title
		ogp.description = data.body.substr(0, 100) + '...';
		ogp.site_name = 'K-NumaTech'
		ogp.image = data.cover_image.url
		if (res.status === 200) {
			return { create: data, ogp };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '@sapper/app';

	export let create;
	export let ogp;

	let contents = "";
</script>

<style>

</style>

<svelte:head>
	<title>{create.title}</title>
  <meta property="og:url" content={ogp.url} />
  <meta property="og:type" content={ogp.type} />
  <meta property="og:title" content={ogp.title} />
  <meta property="og:description" content={ogp.description.replace(/\n/g, '')} />
  <meta property="og:site_name" content={ogp.site_name} />
  <meta property="og:image" content={ogp.image} />
</svelte:head>

<section class="create">
	<header class="mb-4 md:mb-8">
		<h1 class="text-lg md:text-xl">{create.title}</h1>
	</header>
</section>
