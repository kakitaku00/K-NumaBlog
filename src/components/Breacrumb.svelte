<script>
	import { onMount } from 'svelte';
	import { blogTitle } from '../stores/breacrumb';
	import { stores } from '@sapper/app';

	const { page } = stores();

	export let segment;

	const segmentData = {
		profile: "プロフィール",
		blog: "ブログ",
		created: "製作",
		contact: "お問い合わせ"
	}

	function handleSticky() {
		const header = document.querySelector('.header-nav')
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0
		};
		const observer = new IntersectionObserver(handleBorderStyle, options);
		observer.observe(header);
	}

	function handleBorderStyle(entries) {
		const breacrumb = document.querySelector('.breacrumb')
		if (!breacrumb) return
		entries.forEach(entry => {
			if (entry.isIntersecting || entry.rootBounds.width > 767) {
				breacrumb.classList.remove('shadow', 'fixed', 'px-4')
			} else {
				breacrumb.classList.add('shadow', 'fixed', 'px-4')
			}
		});
	}

	onMount(() => {
		handleSticky()
	})
</script>

<div class="breacrumb w-full p-2 top-0 left-0 bg-white z-10">
	<ul class="text-xs flex items-center">
		<li class="flex-shrink-0"><a href="{segment || 'home'}" class="hover:opacity-75">{segmentData[segment] || "ホーム"}</a></li>
		<!-- TODO: 他のsapperの機能で実装できるか探す -->
		{#if $blogTitle && $page.params !== {}}
			<li class="flex items-center truncate"><i class="fas fa-chevron-left mx-2"></i><span class="truncate">{$blogTitle}</span></li>
		{/if}
	</ul>
</div>
