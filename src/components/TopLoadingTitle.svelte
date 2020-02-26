<script>
  import { fade } from 'svelte/transition';
</script>

<style>
.title {
  transform: translateY(100%)
}

.title-1 {
  display: inline-block;
  animation: t-load 0.8s ease 0.5s 1 forwards;
}

.title-2 {
  display: inline-block;
  animation: t-load 1.4s ease 0.5s 1 forwards;
}

.title-3 {
  display: inline-block;
  animation: t-load 1.1s ease 0.5s 1 forwards;
}

.s-title::before,
.s-title::after {
  content: "";
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #fff;
}

.s-title::before {
  transform: translateX(0);
  animation: s-title-load-left 0.8s ease 1.7s 1 forwards;
}
.s-title::after {
  transform: translateX(-100%);
  animation: s-title-load-right 0.8s ease 1.7s 1 forwards;
}

@keyframes t-load {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes s-title-load-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes s-title-load-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

<div out:fade class="w-screen h-screen bg-white fixed top-0 left-0 z-50">
  <div class="inline-block absolute inset-0 m-auto text-center w-64 h-16">
    <div class="text-xl font-bold tracking-widest overflow-hidden">
      <span class="title title-1 inline-block">K</span
      ><span class="title title-2 inline-block">-</span
      ><span class="title title-3 inline-block">Numa</span
      ><span class="title title-1 inline-block">Tech</span>
    </div>
    <div class="mt-2 overflow-hidden">
      <span class="s-title inine-block relative">created by Takumi Kakinuma</span>
    </div>
  </div>
</div>