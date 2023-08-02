<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->


<script lang='ts'>
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	let counter = 0 
	const increase = () => {
		counter ++
	}

	const sourceData  = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	];

	const tableSimple: TableSource = {
	head: ['Name', 'Symbol', 'Weight'],
	body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
	meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
	foot: ['Total', '', '<code class="code">5</code>']
};

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
		<Table source={tableSimple}></Table>
	</div>
</div>
