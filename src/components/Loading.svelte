<script>
	import { fade } from 'svelte/transition';

  export let loading ;
</script>

{#if loading}
  <div out:fade={{delay: 700}} class="w-full h-full min-h-screen absolute block top-0 left-0 bg-white z-20">
    <span class="text-teal-500 opacity-75 my-0 mx-auto block fixed inset-x-0 w-0 h-0" style="top: 200px">
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
    </span>
  </div>
{/if}
