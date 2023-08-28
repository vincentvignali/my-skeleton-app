<script>
	import BlobButton from '$lib/components/BlobButton.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
</script>

<div class="container mx-auto  p-2 rounded mt-2">
	<h2 class="text-center text-3xl text-white dark:text-primary-500 m-2">Effet d'inversion de couleur</h2>
	<div class="flex justify-center items-center flex-col gap-6">
		<div class="grid grid-cols-2 gap-16 ">
			<BlobButton  buttonText='La Pépi' />
			<BlobButton  buttonText='Les Ateliers' />
		</div>
		<div class="grid grid-cols-3 gap-16">
			<BlobButton buttonText='Collaboration'/>
			<BlobButton buttonText='Le Piton !' />
			<BlobButton buttonText='Contact' />
		</div>
	</div>
</div>
