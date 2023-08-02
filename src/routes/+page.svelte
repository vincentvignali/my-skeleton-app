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
			<h1 class="h1">Prototype!</h1>
			<p><b>Fonctionnalités : </b></p>
			<ul>
				<li><code class="code">Page d'une liste d'arbre</code>
				<li><code class="code">Page d'un arbre</code>
				<li><code class="code">Utilisation de tableau et de lien dans l'application</code>
			</ul>
			<p><b>Interactivité : </b></p>
			<code class="code">Jouer avec le conteur ci dessous ! Entrer directement un chiffre ou bien cliquer sur les boutons. </code>
			<div class="flex w-full gap-5">
				<button class="flex-grow rounded bg-red-500 p-2" on:click={increase}>Augmenter</button>
				<input class='text-center text-red-500 rounded-3xl' bind:value={counter}/>
				<button class="flex-grow rounded bg-red-500 p-2" on:click={decrease}>Réduire</button>
			</div>
			<div class="text-center border-red-500 border-2 rounded" >
				{counter}
			</div>
			<a href="/trees" class="w-full"><button class="my-0 mx-auto block w-1/2 mt-5 rounded bg-green-400 p-3 text-2xl border-green-500 border-4"> Voir la liste des arbres</button></a>
		</div>
	</div>
