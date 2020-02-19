<script>
	import { fade } from 'svelte/transition';
  import * as sapper from '@sapper/app'
  import contactApi from "../../api/contact";
  import ContactModal from '../../components/ContactModal.svelte';

  let name = "";
  let email = "";
  let body = "";

  function handleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
  }

  function handleSubmit() {
    const data = {
      name,
      email,
      body
    }
    contactApi.post('/contact', data)
      .then(res => {
        sapper.goto(`/contact/thanks`);
      })
      .catch((error) => {
        console.log(error);
      })
  }
</script>

<style>
  :global(body.modal-active) {
    overflow-x: hidden;
    overflow-y: visible !important;
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
        <span class="block text-gray-700 mb-2"><i class="fas fa-asterisk text-xs mr-1 text-red-500"></i>お名前</span>
        <input bind:value={name} type="text" class="form-input py-1 px-2 block w-full border" placeholder="name">
      </label>
    </div>
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2"><i class="fas fa-asterisk text-xs mr-1 text-red-500"></i>メールアドレス</span>
        <input bind:value={email} type="email" class="form-input py-1 px-2 block w-full border" placeholder="email@example.com">
      </label>
    </div>
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2"><i class="fas fa-asterisk text-xs mr-1 text-red-500"></i>お問い合わせ内容</span>
        <textarea bind:value={body} class="form-textarea py-1 px-2 block w-full border" rows="5" placeholder="テキストを入力"></textarea>
      </label>
    </div>
    <div class="text-center">
      <button on:click={handleModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        内容を確認
      </button>
    </div>
  </div>

  <ContactModal on:click={handleSubmit} on:toggleModal={handleModal} {name} {email} {body}/>
</div>