<script>
	import { fade } from 'svelte/transition';
  import * as sapper from '@sapper/app'
  import contactApi from "../../api/contact";
  import ContactModal from '../../components/ContactModal.svelte';

  let contactData = {
    name: {
      value: "",
      isError: false,
      errorText: ''
    },
    email: {
      value: "",
      isError: false,
      errorText: ''
    },
    body: {
      value: "",
      isError: false,
      errorText: ''
    }
  }

  $: disabled = Object.keys(contactData).filter(key => contactData[key].isError || !contactData[key].value);

  let thanks = false;

  function validation(data) {
    contactData[data].isError = false
    if (!contactData[data].value) {
      contactData[data].isError = true;
      contactData[data].errorText = "入力してください";
    }
    if (data === 'email' && !contactData[data].value.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      contactData[data].isError = true;
      contactData[data].errorText = "正しい形式で入力してください";
    }
  }

  function handleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
  }

  function handleSubmit() {
    const data = {
      name: contactData.name.value,
      email: contactData.email.value,
      body: contactData.body.value,
    }
    contactApi.post('/contact', data)
      .then(res => {
        handleModal();
        thanks = true;
      })
      .catch((error) => {
        console.log(error);
      })
  }
</script>

<style>
  :global(body.modal-active) {
    overflow: hidden;
  }
</style>

<svelte:head>
	<title>K-NumaTech お問い合わせ</title>
</svelte:head>

<div class="mb-8">
  {#if thanks}
    <p>お問い合わせありがとうございました。</p>
  {:else}
    <p>以下のフォームからお問い合わせください。</p>
  {/if}
</div>
{#if !thanks}
  <div class="bg-white my-4 shadow p-4 md:p-8 rounded">
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2"><i class="fas fa-asterisk text-xs mr-1 text-red-500"></i>お名前{#if contactData.name.isError}<span class="inline-block ml-2 text-sm text-red-500">{contactData.name.errorText}</span>{/if}</span>
        <input bind:value={contactData.name.value} on:blur={() => validation("name")} type="text" class="form-input py-1 px-2 block w-full border" placeholder="name">
      </label>
    </div>
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2"><i class="fas fa-asterisk text-xs mr-1 text-red-500"></i>メールアドレス{#if contactData.email.isError}<span class="inline-block ml-2 text-sm text-red-500">{contactData.email.errorText}</span>{/if}</span>
        <input bind:value={contactData.email.value} on:blur={() => validation("email")} type="email" class="form-input py-1 px-2 block w-full border" placeholder="email@example.com">
      </label>
    </div>
    <div class="mb-4">
      <label class="block">
        <span class="block text-gray-700 mb-2"><i class="fas fa-asterisk text-xs mr-1 text-red-500"></i>お問い合わせ内容{#if contactData.body.isError}<span class="inline-block ml-2 text-sm text-red-500">{contactData.body.errorText}</span>{/if}</span>
        <textarea bind:value={contactData.body.value} on:blur={() => validation("body")} class="form-textarea py-1 px-2 block w-full border" rows="5" placeholder="テキストを入力"></textarea>
      </label>
    </div>
    <div class="text-center">
      <button on:click={handleModal} disabled={disabled.length} class="disabled:bg-gray-500 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        内容を確認
      </button>
    </div>
  </div>
{/if}
{#if !disabled.length}
  <ContactModal on:click={handleSubmit} on:toggleModal={handleModal} {contactData}/>
{/if}