<script lang="ts">
	import { page } from '$app/stores';
	import type { Tree } from '$lib/types/treeType.js';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	// Switch to run the fetch function
	let FetchFromApi: boolean = false;

	// Is Empty.
	let resultFromApi: Tree[] = [];

	// Is populated at page Loading.
	export let data;

	// Fetch function.
	const fetchDataFromApi = async () => {
		await fetch('/api').then(async (res) => {
			resultFromApi = await res.json();
		});
		await new Promise((resolve) => setTimeout(resolve, 2000));
	};

	const treesFromLoadFunctions = data.allTrees.map((tree) => {
		return {
			...tree,
			href: `<a href=${$page.url.pathname}/${tree.id}> <b class='bg-green-600 p-1 rounded'>see more </b><a/>`
		};
	});
	console.log('treeLoad', treesFromLoadFunctions);

	// Make it reactive so it updates when fetch button is clicked (Svelte will detect automatically the data dependance with resultFromApi)
	$: treesFromFetch = resultFromApi.map((tree) => {
		return {
			...tree,
			href: `<a href=${$page.url.pathname}/${tree.id}> <b class='bg-green-600 p-1 rounded'>see more </b><a/>`
		};
	});
	console.log('treeLoadFetch', treesFromFetch);

	// TableSourceMaker
	const createTreeTableSource = (dataSource: Tree[]): TableSource => {
		const treeTable: TableSource = {
			head: ['Name', 'averageSize', 'seasonToCollect', 'seasonToPlant', 'SeeMore'],
			body: tableMapperValues(dataSource, [
				'name',
				'averageSize',
				'seasonToCollect',
				'seasonToPlant',
				'href'
			]),
			meta: tableMapperValues(dataSource, [
				'position',
				'name',
				'averageSize',
				'seasonToCollect',
				'seasonToPlant'
			]),
			foot: ['Total', '', '<code class="code">5</code>']
		};
		return treeTable;
	};
</script>

<div class="mx-auto pt-10 w-3/4">
	<div class="rounded border-2 border-primary-500 p-2">
		<h3 class="text-primary-500 text-center font-schoolBell text-lg p-1">
			Data form Load Function
		</h3>
		<p class='text-primary-500 text-lg'>Within this table, the data is retrieved directly from the dedicated server page.</p>
		<ul class="text-primary-500 m-6">
			<li class="text-primary-500 m-2"> - First, the current url got hit : <span class="bg-primary-200 text-primary-600 font-schoolBell rounded p-1">{$page.url}</span>.</li>
			<li class="text-primary-500 m-2"> - Then, The <span class="bg-primary-200 text-primary-600 font-schoolBell rounded p-1">`+page.server.ts` (or`+layout.server.ts`)</span> load the data though the Load function.</li>
			<li class="text-primary-500 m-2"> - Finally, The <span class="bg-primary-200 text-primary-600 font-schoolBell rounded p-1">`+page.svelte`</span> receives it within the <span class="bg-success-200 text-success-800 font-schoolBell rounded p-1">`export let data`</span> standard object.</li>
		</ul>
		<Table source={createTreeTableSource(treesFromLoadFunctions)} color="table-compact" />
	</div>
</div>
<div class="mx-auto pt-4 w-3/4">
	<div class="rounded border-2 border-primary-500 p-2">
		<h3 class="text-primary-500 text-center font-schoolBell text-lg p-1">Data form Fetch</h3>
		<p class='text-primary-500 text-lg'>Within this table, the data is retrieved from a standalone api endpoint living in <span class="bg-primary-200 text-primary-600 font-schoolBell rounded p-1">Routes</span> folder root.</p>
		<ul class="text-primary-500 m-6">
			<li class="text-primary-500 m-2"> - Initialize a first empty variable which will receives the fetch result later.</li>
			<li class="text-primary-500 m-2"> - Then, initialize a second variable, being reactive <span class="bg-primary-200 text-primary-600 font-schoolBell rounded p-1">$:</span> and assigned to the first one with any operations (map, filter etc ...). This variable will be used in the Ui.</li>
			<li class="text-primary-500 m-2"> - Secondaly, write a fetch function that populate that variable.</li>
			<li class="text-primary-500 m-2"> - Finally, Make a fetch call wherever you want to. See following  <span class="bg-success-200 text-success-800 font-schoolBell rounded p-1">Fetch button</span> for instance.</li>
		</ul>
		{#if FetchFromApi}
			{#await fetchDataFromApi()}
				<p
					class="bg-primary-500 h-auto w-1/2 mx-auto rounded-lg border-dashed text-center p-2 m-2 text-2xl animate-pulse">
					Loading
				</p>
			{:then value}
				<Table source={createTreeTableSource(treesFromFetch)} color="table-compact" />
			{:catch error}
				<p>Sorry there has been an error</p>
			{/await}
		{/if}
		{#if !FetchFromApi}
			<button
				on:click={() => (FetchFromApi = true)}
				class="mx-auto border-2 border-primary-500 p-2 text-center text-primary-500 rounded block mt-8"
				>Fetch Data</button>
		{/if}
	</div>
</div>
