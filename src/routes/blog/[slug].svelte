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
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	/* .content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	} */
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="content">
	<h1>{post.title}</h1>
	<div class="heading">
		{#each heading as head}
			 <div class="heading-list"><a href={`/blog/${post.id}/#${head}`} class="heading-item">{head}</a></div>
		{/each}
	</div>
	<div class='markdown-body'>
		{@html contents}
	</div>
</div>

