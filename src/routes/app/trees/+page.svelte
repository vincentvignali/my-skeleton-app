<script lang="ts">
	export let data;
	const trees = data.allVarietes;
</script>

<div class="text-primary-500">
	<p>Présentation de tout les arbres et boutures</p>
</div>
<ul>
	{#each trees as tree}
		<li class="text-black">{tree.name}</li>
	{/each}
</ul>
