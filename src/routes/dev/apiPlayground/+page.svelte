<script>
	import { onMount, onDestroy } from 'svelte';

	export let data;
	let items = data.items;

	onMount(() => {
		console.log('Component mount');
	});

	onDestroy(() => {
		console.log('Component unmount');
	});
</script>

<div class="container mx-auto variant-ghost-tertiary p-2 rounded mt-2">
	<h2 class="text-3xl text-primary-500 m-2 text-center">Api Test</h2>
	<form action="?/create" method="post">
		<button type="submit" class="my-2 mx-auto block btn variant-ghost-primary"
			>Create a pocket record</button
		>
	</form>
	<div class="flex justify-center items-center flex-wrap">
		{#if items}
			{#each items as item}
				<div class="text-center p-1 w-1/3 m-1 border-2 rounded variant-outline-secondary">
					<div class="text-primary-500">Name: {item.name}</div>
					<div class="text-primary-500">ID: {item.id}</div>
					<form action="?/delete" method="post">
						<input type="hidden" name="id" value={item.id} />
						<button class="btn bg-error-500">delete</button>
					</form>
				</div>
			{/each}
		{:else}
			<div class="text-primary-500 p-2">loading</div>
		{/if}
	</div>
</div>
