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

<h1 class="h1 text-primary-500 text-center">Prototype du Piton</h1>
	<div class="mx-auto flex justify-center items-center w-full">
		<div class="p-2 w-fit">
			<p class="font-light text-primary-500"><b>Fonctionnalités : </b></p>
			<ul >
				<li><p class="mt-2 code break-words whitespace-normal">Page d'une liste d'arbre</p>
				<li><p class="mt-2 code break-words whitespace-normal">Page d'un arbre</p>
				<li><p class="mt-2 code break-words whitespace-normal">Utilisation de tableau et l'application</p>
			</ul>
			 <a href="/trees" class="w-full"><button class="my-0 mx-auto block  btn variant-ghost-primary mt-10"> Voir la liste des arbres</button></a>
		</div>
	</div>
