<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let name;
  export let email;
  export let body;

  function toggleModal() {
    dispatch('toggleModal')
  }
</script>

<style>
  .modal {
    transition: opacity 0.25s ease;
  }
</style>

<div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
  <div on:click={toggleModal} class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
  <div class="modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
    <div class="modal-content py-4 text-left px-6">
      <div class="flex justify-between items-center mb-6">
        <p class="text-2xl font-bold">お問い合わせ内容</p>
        <div on:click={toggleModal} class="modal-close cursor-pointer z-50">
          <i class="fas fa-times fa-1x"></i>
        </div>
      </div>

      <div class="mb-6">
        <span class="block text-gray-700 font-bold mb-2">お名前</span>
        <span class="block text-gray-700">{name}</span>
      </div>
      <div class="mb-6">
        <span class="block text-gray-700 font-bold mb-2">メールアドレス</span>
        <span class="block text-gray-700">{email}</span>
      </div>
      <div class="mb-6">
        <span class="block text-gray-700 font-bold mb-2">お問い合わせ内容</span>
        <span class="block text-gray-700">{body}</span>
      </div>

      <div class="flex justify-center pt-2">
        <button on:click={toggleModal} class="bg-white text-blue-700 font-semibold mr-2 py-2 px-4 border border-blue-500 hover:opacity-75 rounded">キャンセル</button>
        <button on:click class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">内容を送信</button>
      </div>
    </div>
  </div>
</div>