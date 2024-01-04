<script lang="ts">
	import { filter, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import { IconCheck } from '@tabler/icons-svelte';

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
		console.log(
			especeList.find((especeItem) => especeItem.name === variete.expand.espece.name)?.picture
		);
		return {
			position: i + 1,
			name: variete.name,
			espece: variete.expand.espece.name
		};
	});

	const toggle = (especeClicked: string): void => {
		especeRecordList[especeClicked] = !especeRecordList[especeClicked];
	};

	const createTableSimple = (data: Row[]) => ({
		head: ['Nom', 'Espece'],
		body: tableMapperValues(data, ['name', 'espece']),
		meta: tableMapperValues(data, ['position', 'name', 'espece']),
		foot: ['Total', `<code class="code">${data.length}</code>`]
	});

	let tableSimple = createTableSimple(sourceData);
	let searchValue = '';

	$: noFilterActive = Object.values(especeRecordList).every((espece) => espece === false);

	$: filteredData = sourceData.filter((item) => {
		console.log(item);
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

	$: tableSimple.body = tableMapperValues(filteredData, ['name', 'espece']);
	$: tableSimple.foot = ['Total', `<code class="code">${filteredData.length}</code>`];
</script>

<div class="flex flex-col w-full gap-4 my-4">
	<div class="flex grow gap-3">
		{#each Object.keys(especeRecordList) as especeRecord}
			<button
				class="flex-1 chip h-12 relative {especeRecordList[especeRecord]
					? 'variant-filled'
					: 'variant-soft'}"
				on:click={() => {
					toggle(especeRecord);
				}}
				on:keypress>
				{#if especeRecordList[especeRecord]}<span
						><img
							src={especeList.find((especeItem) => especeItem.name === especeRecord)?.picture}
							alt="Espece logo"
							class="absolute scale-50 top-5 left-1/2 -translate-y-full -translate-x-1/2" /></span
					>{/if}
				<span class="capitalize">{especeRecord}</span>
			</button>
		{/each}
	</div>
	<input class="rounded" type="search" name="" id="" bind:value={searchValue} />
</div>
<Table interactive={true} source={tableSimple} />
