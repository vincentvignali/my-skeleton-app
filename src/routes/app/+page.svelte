<script>
	import { page } from '$app/stores';

	import BlobButton from '$lib/components/BlobButton.svelte';
	import { currentTextHelper } from '$lib/stores/textHelper';
	console.log($page);
	console.log(currentTextHelper);
</script>

<h1 class="font-schoolBell text-6xl text-center dark:text-primary-500 text-white mb-24">
	Bienvenue au Pitons du dehors 👨‍🌾
</h1>
<div
	class="flex flex-col justify-center  border-2 p-2 rounded-md border-white w-4/5 mx-auto  h-20 {$currentTextHelper.active
		? ''
		: 'opacity-0'}">
	<p class="text-center text-white font-schoolBell text-xl">
		{$currentTextHelper.content}
	</p>
</div>
<div class="container mx-auto p-2 rounded mt-20">
	<div class="flex justify-center items-center flex-col gap-6">
		<div class="grid grid-cols-2 gap-16">
			<BlobButton
				buttonUrl={$page.route.id + '/trees'}
				buttonText="La Pépi"
				textHelper="🌱 Découvrez le catalogue de nos bébés végétaux : boutures, sions, fruitiers et autres merveilles de la nature soigneusement entretenues par nos soins" />
			<BlobButton
				buttonUrl={$page.route.id + '/workshops'}
				buttonText="Les Ateliers"
				textHelper="🧑‍🎨 Nous allons vous apprendre à créer, réparer et vous exprimer sur nos matériaux favoris." />
		</div>
		<div class="grid grid-cols-3 gap-16">
			<BlobButton
				buttonUrl={$page.route.id + '/collaborate'}
				buttonText="Collaboration"
				textHelper="🤲 Nous sommes en permanence à la recherche de nouveaux projets d'accompagnement, contactez nous pour en parler." />
			<BlobButton
				buttonUrl={$page.route.id + '/about'}
				buttonText="Le Piton !"
				textHelper="👪 Apprenez en plus sur le piton du dehors, qui sommes-nous et quelle est notre histoire." />
			<BlobButton
				buttonUrl={$page.route.id + '/contacts'}
				buttonText="Contact"
				textHelper="📩 Contactez-nous." />
		</div>
	</div>
</div>
