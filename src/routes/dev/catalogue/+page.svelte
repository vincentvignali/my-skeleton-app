<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let data;

	type Row = {
		position: number;
		name: string;
		espece: string;
	};

	const { varieteList, especeList } = data;

	const especeRecordList: Record<string, boolean> = Object.fromEntries(
		especeList.map((espece) => [espece.name, false])
	);

	const sourceData = varieteList.map((variete, i) => {
		return {
			id: variete.id,
			position: i + 1,
			name: variete.name,
			espece: variete.expand.espece.name
		};
	});

	const toggle = (especeClicked: string): void => {
		especeRecordList[especeClicked] = !especeRecordList[especeClicked];
	};

	const createTableSimple = (data: Row[]) => ({
		head: ['Nom'],
		body: tableMapperValues(data, ['name']),
		meta: tableMapperValues(data, ['id', 'position', 'name', 'espece'])
	});

	let tableSimple = createTableSimple(sourceData);
	let searchValue = '';

	$: noFilterActive = Object.values(especeRecordList).every((espece) => espece === false);

	$: filteredData = sourceData.filter((item) => {
		return Object.values(item).some((value) => {
			if (noFilterActive) {
				return value?.toString().toLowerCase().includes(searchValue.toLowerCase());
			} else {
				return (
					value?.toString().toLowerCase().includes(searchValue.toLowerCase()) &&
					especeRecordList[item.espece.toString()]
				);
			}
		});
	});

	$: tableSimple.body = tableMapperValues(filteredData, ['name']);
</script>

<h1 class="h1 text-center py-10">Catalogue</h1>
<div class="flex flex-col w-full gap-4 my-4">
	<div class="flex gap-3">
		{#each Object.keys(especeRecordList) as especeRecord}
			<div class="relative flex-1">
				<button
					class="w-full h-full chip {especeRecordList[especeRecord]
						? 'variant-filled'
						: 'variant-soft'}"
					on:click={() => {
						toggle(especeRecord);
					}}
					on:keypress>
					<span class="capitalize">{especeRecord}</span>
				</button>
				{#if especeRecordList[especeRecord]}
					<img
						src={especeList.find((especeItem) => especeItem.name === especeRecord)?.picture}
						alt="Espece logo"
						class="absolute top-0 left-1/2 -translate-y-full -translate-x-1/2 scale-50 h-12 w-10" />
				{/if}
			</div>
		{/each}
	</div>
	<input class="rounded" type="search" name="" id="" bind:value={searchValue} />
</div>
<div class="w-100">
	<span class="badge flex justify-center">{filteredData.length} Arbres</span>
	<Table
		interactive={true}
		source={tableSimple}
		on:selected={(row) => goto(`${$page.url}/${row.detail[0]}`)} />
</div>
