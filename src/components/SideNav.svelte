<script>
  import { onMount } from 'svelte'
  import * as sapper from '@sapper/app'
  import microApi from '../api/index';

  let titleData = [];
  let search = "";

  function getPost() {
    microApi.get(encodeURI('blog?fields=title,id&limit=3')).then(res => {
      titleData = res.data.contents
    })
  }

  function handleSubmit() {
    if (!search) return
    sapper.goto(`/blog?filters=${search}`);
  }

  onMount(() => {
    getPost()
  })
</script>

<div class="sticky top-2 hidden md:block">
  <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      プロフィール
    </div>
    <div class="px-2">
      <div class="mb-2"><img class="w-24 mx-auto rounded-full" src="https://avatars0.githubusercontent.com/u/36177545?s=460&v=4" alt="profile image"></div>
      <div class="mb-2"><p class="text-sm">Takumi Kakinuma</p></div>
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
  <!-- <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      カテゴリー
    </div>
    <ul class="">
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">カテゴリー1</a></li>
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">カテゴリー2</a></li>
      <li class="border-b"><a href="." class="block p-2 transition duration-500 hover:opacity-50">カテゴリー3</a></li>
    </ul>
  </div> -->
  <div class="mb-4 text-sm">
    <div class="w-full rounded bg-gray-200 p-2 mb-2">
      最新記事
    </div>
    <ul class="">
      {#each titleData as data}
        <li class="border-b"><a href={`blog/${data.id}`} class="block p-2 transition duration-500 hover:opacity-50">{data.title}</a></li>
      {/each}
    </ul>
  </div>
</div>
