<script>
	import { fade } from 'svelte/transition';

  function handleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
  }
</script>

<style>
  :global(body.modal-active) {
    overflow-x: hidden;
    overflow-y: visible !important;
  }

  .modal {
    transition: opacity 0.25s ease;
  }
</style>

<svelte:head>
	<title>お問い合わせ</title>
</svelte:head>

<div in:fade>
  <header class="mb-8">
    <h1>お問い合わせ</h1>
    <p>管理者・当サイトへのお問い合わせはこちらからお願いいたします。</p>
  </header>
  <div class="bg-white my-4 shadow p-8 rounded">
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2">お名前</span>
        <input type="text" class="form-input py-1 px-2 block w-full border" placeholder="name">
      </label>
    </div>
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2">メールアドレス</span>
        <input type="email" class="form-input py-1 px-2 block w-full border" placeholder="email@example.com">
      </label>
    </div>
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2">お問い合わせ内容</span>
        <textarea class="form-textarea py-1 px-2 block w-full border" rows="5" placeholder="テキストを入力"></textarea>
      </label>
    </div>
    <div class="text-center">
      <button on:click={handleModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        内容を確認
      </button>
    </div>
  </div>

  <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div class="modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">Simple Modal!</p>
          <div on:click={handleModal} class="modal-close cursor-pointer z-50">
            <i class="fas fa-times fa-1x"></i>
          </div>
        </div>

        <!--Body-->
        <p>Modal content can go here</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>

        <!--Footer-->
        <div class="flex justify-center pt-2">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold mr-2 py-2 px-4 border border-blue-500 hover:opacity-75 rounded">キャンセル</button>
          <button on:click={handleModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">内容を送信</button>
        </div>
      </div>
    </div>
  </div>
</div>