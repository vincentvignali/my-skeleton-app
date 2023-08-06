<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { trees as treesData } from './data';

	const trees = treesData.map((tree) => {
		return {
			...tree,
			href: `<a href=/trees/${tree.slug}> <b class='bg-green-600 p-1 rounded'>see more </b><a/>`
		};
	});

	const treeTable: TableSource = {
		head: ['Name', 'averageSize', 'seasonToCollect', 'seasonToPlant', 'SeeMore'],
		body: tableMapperValues(trees, [
			'name',
			'averageSize',
			'seasonToCollect',
			'seasonToPlant',
			'href'
		]),
		meta: tableMapperValues(trees, [
			'position',
			'name',
			'averageSize',
			'seasonToCollect',
			'seasonToPlant'
		]),
		foot: ['Total', '', '<code class="code">5</code>']
	};
</script>

<div class="mx-auto pt-10 w-3/4">
	<div class="rounded border border-red">
		<Table source={treeTable} />
	</div>
</div>
