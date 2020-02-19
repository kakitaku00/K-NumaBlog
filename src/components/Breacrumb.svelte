<script>
  import { blogTitle } from '../stores/blogTitle';
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

<header class="mb-4">
  <div class="breacrumb mb-1">
    <ul class="text-xs flex">
      <li><a href="{segment || 'home'}" class:selected='{segment === "home"}'>{segmentData[segment] || "ホーム"}</a></li>
      <!-- TODO: 他のsapperの機能で実装できるか探す -->
      {#if $blogTitle && $page.params.slug}
         <li><a href="#_">＜ {$blogTitle}</a></li>
      {/if}
    </ul>
  </div>
</header>