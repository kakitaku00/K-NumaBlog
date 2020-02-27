<script context="module">
	import microApi from '../../api/index';
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// // this file is called [slug].svelte
		// const res = await microApi.get(`blog/${params.slug}`).then(res => res);
		// const data = await res.data;
		// if (res.status === 200) {
		// 	return { post: data };
		// } else {
		// 	this.error(res.status, data.message);
		// }
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
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '@sapper/app';
	import { blogTitle } from '../../stores/breacrumb'

	export let post;
	blogTitle.set(post.title)

	let contents = "";
	let toc = []
	let anchorIndex = [0, 0];

	function compileMarkdown() {
		marked.setOptions({
			langPrefix: '',
			highlight: (code, lang) => {
				return hljs.highlightAuto(code, [lang]).value
			}
		});

		contents = marked(post.body);
	}

	// FIXME: いらないかも
	function getAnchorIndex(level) {
		anchorIndex[level - 1] += 1;
		for (var i = level; i < anchorIndex.length; i++) {
			anchorIndex[i] = 0
		}
		return (
			`index-${anchorIndex[0]}-${anchorIndex[1]}`
		)
	}

	function createToc() {
		let elements = contents.split(/\n/)
		toc = elements.filter(el => el.match(/^<h[2-3]/)).map(el => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(el, "text/xml").firstChild;
			const tagLevel = doc.tagName.slice(1) - 1;
			// FIXME: 別のクラスに変えてもいいかも
			const index = getAnchorIndex(tagLevel);
			const pageLink = doc.innerHTML.toLowerCase().replace(/\(|\)/g, '')
			const list =  `<li class="${index}"><a href="/blog/${post.id}#${pageLink}" class="text-blue-500 hover:text-blue-800">${doc.innerHTML}</a></li>`
			return list
		})
	}

	async function renderPost() {
		await compileMarkdown()
		await createToc()
	}

	onMount(async () => {
		await renderPost()
	})

	onDestroy(() => {
		blogTitle.set('')
	})
</script>

<style>
	.heading-list :global(li[class*="index"]) {
		list-style-type: decimal;
		margin: 0 0 .5rem 1.5rem;

	}

	.heading-list :global(li:not([class$="-0"])) {
		list-style-type: disc;
		margin-left: 3rem;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="content">
	<header class="mb-4 md:mb-8">
		<h1 class="text-xl md:text-3xl">{post.title}</h1>
	</header>
	<div class="mb-4">
		<h2>目次</h2>
		<ul class="heading-list">
			{#each toc as list}
				{@html list}
			{/each}
		</ul>
	</div>
	<div class='markdown-body'>
		{@html contents}
	</div>
</div>
