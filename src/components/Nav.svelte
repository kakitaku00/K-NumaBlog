<script>
	export let segment;
</script>

<style>
	.selected {
		color: #fff;
	}
</style>

<nav class="header-nav flex items-center justify-between flex-wrap bg-teal-500 p-4 md:p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="." class="font-semibold text-xl tracking-tight">K-NumaTech</a>
  </div>
  <div class="block md:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
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