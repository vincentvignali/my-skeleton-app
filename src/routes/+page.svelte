<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script>
	let counter = 0 
	const increase = () => {
		counter ++
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is critical!</li>
			<li><code class="code">/src/app.postcss</code> - minimal css to make the page full screen, may not be relevant for your project</li>
			<li><code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents</li>
		</ul>
		<button class="rounded bg-red-500 p-2" on:click={increase}>Increase</button>
		<input bind:value={counter} />
		<div>
			{counter}
		</div>
	</div>
</div>
