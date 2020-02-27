<script>
  import { fade } from 'svelte/transition';
  import * as sapper from '@sapper/app'

	export let segment;

  let spMenu = false;

  function pagination(url) {
    spMenu = false;
    sapper.goto(url);
  }
</script>

<style>
	.selected {
		color: #fff;
	}

  .overlay {
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>

<nav class="header-nav flex items-center justify-between flex-wrap bg-teal-500 p-4 md:p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="." class="font-bold text-xl tracking-tight">K-NumaTech</a>
  </div>
  <div class="block md:hidden">
    <button on:click={() => spMenu = true} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <i class="fas fa-bars"></i>
    </button>
  </div>
  <div class="w-full hidden md:block flex-grow md:flex md:items-center md:w-auto">
    <div class="text-sm md:flex-grow">
      <a href="." class:selected='{segment === undefined}' class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500">
        ホーム
      </a>
      <a href="profile" class:selected='{segment === "profile"}' class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500">
        プロフィール
      </a>
      <a href="blog" class:selected='{segment === "blog"}' class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500">
        ブログ
      </a>
      <a href="created" class:selected='{segment === "created"}' class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500">
        製作
      </a>
      <a href="contact" class:selected='{segment === "contact"}' class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500">
        お問い合わせ
      </a>
    </div>
    <div class="flex">
      <a href="."><i class="fab fa-twitter text-2xl mr-6 fill-current text-white transition-opacity duration-500 hover:opacity-75"></i></a>
      <a href="."><i class="fab fa-github text-2xl fill-current text-white transition-opacity duration-500 hover:opacity-75"></i></a>
    </div>
  </div>
</nav>
<!-- SP MENU -->
{#if spMenu}
  <div in:fade out:fade = {{duration: 100}} class="overlay fixed top-0 left-0 w-full h-screen bg-white-alpha z-30 backdrop-blur">
    <div class="block">
      <button on:click={() => spMenu = false} class="flex items-center px-3 py-2 border rounded absolute top-4 right-4">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <nav class="mt-24 px-4">
      <ul class="text-sm text-center">
        <li class="mb-4">
          <button on:click={() => pagination('.')} class="inline-block text-xl font-bold {segment === undefined ? 'text-teal-500' : ''}">
            ホーム
          </button>
        </li>
        <li class="mb-4">
          <button on:click={() => pagination('profile')} class="inline-block text-xl font-bold {segment === 'profile' ? 'text-teal-500' : ''}">
            プロフィール
          </button>
        </li>
        <li class="mb-4">
          <button on:click={() => pagination('blog')} class="inline-block text-xl font-bold {segment === 'blog' ? 'text-teal-500' : ''}">
            ブログ
          </button>
        </li>
        <li class="mb-4">
          <button on:click={() => pagination('created')} class="inline-block text-xl font-bold {segment === 'created' ? 'text-teal-500' : ''}">
            製作
          </button>
        </li>
        <li class="mb-4">
          <button on:click={() => pagination('contact')} class="inline-block text-xl font-bold {segment === 'contact' ? 'text-teal-500' : ''}">
            お問い合わせ
          </button>
        </li>
      </ul>
    </nav>
  </div>
{/if}
