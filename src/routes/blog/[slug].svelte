<script context="module">
	import microApi from '../../api/index';
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await microApi.get(`blog/${params.slug}`).then(res => res);
		const data = await res.data;
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import "../../../node_modules/github-markdown-css/github-markdown.css";
	import "../../../node_modules/highlight.js/styles/zenburn.css"
	import marked from 'marked';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte'

	export let post;
	let contents = "";
	let heading = "";

	marked.setOptions({
		langPrefix: '',
		highlight: (code, lang) => {
			return hljs.highlightAuto(code, [lang]).value
		}
	});

	function createHeadingList (postBody) {
		const headingList = postBody.match(/^##\s.*\s|\s##\s.*\s|\s##\s.*$/g);
		return headingList.map(h => h.replace(/\n|\s|#/g, ''));
	}

	onMount(async () => {
		contents = await marked(post.body);
		heading = await createHeadingList(post.body);
	})
</script>

<style>
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="content">
	<h1 class="font-semibold">{post.title}</h1>
	<div class="mb-4">
		<h2>目次</h2>
		{#each heading as head, index}
			 <div class="heading-list"><a href={`/blog/${post.id}/#${head.toLowerCase()}`} class="text-blue-500 hover:text-blue-800">{index + 1}. {head}</a></div>
		{/each}
	</div>
	<div class='markdown-body'>
		{@html contents}
	</div>
</div>

