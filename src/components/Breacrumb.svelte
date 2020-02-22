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
</script>

<style>
:global(::before) {
	border-color: #333;
}
</style>

<div class="mb-4">
	<div class="breacrumb p-2 mb-1">
		<ul class="text-xs flex">
			<li><a href="{segment || 'home'}" class:selected='{segment === "home"}'>{segmentData[segment] || "ホーム"}</a></li>
			<!-- TODO: 他のsapperの機能で実装できるか探す -->
			{#if $blogTitle && $page.params !== {}}
				<li class="flex items-center"><i class="fas fa-chevron-left mx-2"></i>{$blogTitle}</li>
			{/if}
		</ul>
	</div>
</div>
