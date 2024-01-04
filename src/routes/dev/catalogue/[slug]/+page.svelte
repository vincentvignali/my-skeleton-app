<script lang="ts">
	import { IconPictureInPictureTop } from '@tabler/icons-svelte';
	export let data;
</script>

<div class="container py-4 flex items-center flex-col justify-center mx-auto">
	<a href="/dev/catalogue" class="m-2"
		><button class="variant-ghost-tertiary rounded-md self-center p-2 text-sm"
			>Retour au catalogue</button
		></a>
	<div class="card p-4">
		<header class="card-header text-center">
			<h1 class="text-2xl p-2">{data.entity.name}</h1>
			<div class="p-2 placeholder animate-pulse h-32 flex justify-center items-center">
				<IconPictureInPictureTop />
			</div>
			<section class="p-4">Description de la variété à renseigner</section>
			<footer class="card-footer mt-12">
				Crée le : {new Date(data.entity.created).toLocaleDateString()}
			</footer>
		</header>
	</div>
</div>
