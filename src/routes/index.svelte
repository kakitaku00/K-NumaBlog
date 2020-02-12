<style>
	.post:nth-child(odd) {
		margin-right: 2rem;
	}
	/* h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1 class="mb-4">Great success!</h1>

<figure>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p class="mb-4"><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

<div class="flex mb-4">
  <div class="w-1/2 post">
		<div class="w-full rounded overflow-hidden shadow-lg">
			<img class="w-full" src="/card-top.jpg" alt="Sunset in the mountains">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
			</div>
			<div class="px-6 py-4">
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
			</div>
		</div>
	</div>
  <div class="w-1/2 post">
		<div class="w-full rounded overflow-hidden shadow-lg">
			<img class="w-full" src="/card-top.jpg" alt="Sunset in the mountains">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
			</div>
			<div class="px-6 py-4">
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
			</div>
		</div>
	</div>
</div>
