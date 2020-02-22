<script>
  import * as sapper from '@sapper/app'

  let search = "";

  function handleSubmit() {
    if (!search) return
    sapper.goto(`/blog?filters=${search}`);
  }
</script>

<div class="sticky top-2 hidden md:block">
  <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      プロフィール
    </div>
    <div class="p-2">
      プロフィール内容
    </div>
  </div>
  <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      記事を検索
    </div>
    <div class="shadow">
      <form on:submit|preventDefault={handleSubmit} class="flex" >
        <input bind:value={search} class="w-full rounded p-2" type="text" placeholder="キーワードを入力">
        <button type="submit" class="bg-white w-auto flex justify-end items-center text-blue p-2 hover:text-blue-light">
          <i class="material-icons">search</i>
        </button>
      </form>
    </div>
  </div>
  <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      カテゴリー
    </div>
    <ul class="">
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">カテゴリー1</a></li>
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">カテゴリー2</a></li>
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">カテゴリー3</a></li>
    </ul>
  </div>
  <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      最新記事
    </div>
    <ul class="">
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">最新記事1</a></li>
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">最新記事2</a></li>
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">最新記事3</a></li>
    </ul>
  </div>
</div>
