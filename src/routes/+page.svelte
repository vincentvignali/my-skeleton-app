<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->


<script lang='ts'>
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import Layout from './+layout.svelte';
	let counter = 0 
	const increase = () => {
		counter ++
	}
	const decrease = () => {
		counter --
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
			<div class="flex w-full gap-5">

				<button class="flex-grow rounded bg-red-500 p-2" on:click={increase}>Increase</button>
				<input class='text-center text-red-500 rounded-3xl' bind:value={counter}/>
				<button class="flex-grow rounded bg-red-500 p-2" on:click={decrease}>Increase</button>
			</div>
			<div class="text-center border-red-500 border-2 rounded" >
				{counter}
			</div>
			<a href="/trees" class="w-full"><button class="my-0 mx-auto block w-1/2 mt-5 rounded bg-red-500 p-2"> See trees </button></a>
			<Table source={tableSimple}></Table>
		</div>
	</div>
