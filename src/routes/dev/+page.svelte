<script>
	import { page } from '$app/stores';
	import BlobButton from '$lib/components/BlobButton.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
</script>

<h1 class="text-3xl text-center font-schoolBell mt-8">Homepage</h1>
<div class="container mx-auto p-2 rounded mt-2">
	<div class="flex justify-center items-center flex-col gap-6">
		<div class="grid gap-16">
			<BlobButton buttonText="La Pépi" buttonUrl="{$page.url}/catalogue" />
			<!-- <BlobButton buttonText="Les Ateliers" buttonUrl="" /> -->
		</div>
		<div class="grid grid-cols-3 gap-16">
			<!-- <BlobButton buttonText="Collaboration" buttonUrl="" />
			<BlobButton buttonText="Le Piton !" buttonUrl="" />
			<BlobButton buttonText="Contact" buttonUrl="" /> -->
		</div>
	</div>
</div>
