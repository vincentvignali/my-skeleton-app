<script lang="ts">
	import { page } from '$app/stores';

	const bonDeCommande = { type: 'Bon de Commande', path: '/pdfs/-Bon-de-Commande.pdf' };

	const catalogues = [
		{ type: 'Cerisiers', path: '/pdfs/-Catalogue-Cerisiers-2023.pdf' },
		{ type: 'Poiriers', path: '/pdfs/-Catalogue-Poiriers-2023.pdf' },
		{ type: 'Pommiers', path: '/pdfs/-Catalogue-Pommiers-2023.pdf' },
		{ type: 'Portes Greffes', path: '/pdfs/-Catalogue-Porte-Greffe-2023.pdf' },
		{ type: 'Pruniers', path: '/pdfs/-Catalogue-Pruniers-2023.pdf' }
	];
</script>

<div
	class="w-12/12 h-full mx-auto bg-primary-500 transition-colors duration-300 text-primary-500 flex justify-center gap-5 flex-col">
	<h1 class="font-schoolBell text-2xl text-center text-white">
		👩‍🌾 👩‍🌾 👨‍🌾
		<br />
		Bienvenue au Piton
	</h1>
	<div class="flex flex-col gap-0 text-start mx-auto">
		<p class="font-schoolBell text-md text-white">1. Télécharger nos catalogues 2023.</p>
		<p class="font-schoolBell text-md text-white">2. Télécharger & compléter un bon de commande.</p>
		<p class="font-schoolBell text-md text-white">
			3. Envoyer le à lepitondudehors@protonmail.com.
		</p>
		<p class="font-schoolBell text-md text-white">4. Nous vous contacterons :)</p>
	</div>
	{#each catalogues as catalogue}
		<a
			class="mx-auto btn text-primary-500 bg-primary-50 rounded-xl text-sm font-schoolBell tracking-widest h-10 w-80 md:w-1/3 hover:text-lg"
			download="{catalogue.type}.pdf"
			href={catalogue.path}>
			<span class=" ext-primary font-extrabold">{catalogue.type}</span>
		</a>
	{/each}
	<p class="font-schoolBell text-md text-white text-center">Ou</p>
	<a
		class="border-warning-600 border-4 mx-auto btn text-warning-700 font-black bg-white rounded-xl text-sm font-schoolBell tracking-widest h-12 w-80 md:w-1/3 hover:text-lg"
		href="{$page.url}dev/catalogue">
		Accéder au catablogue en ligne
	</a>
	<p class="font-schoolBell text-md text-white text-center">Puis</p>
	<a
		class="border-success-600 border-4 mx-auto btn text-success-700 font-black bg-white rounded-xl text-sm font-schoolBell tracking-widest h-12 w-80 md:w-1/3 hover:text-lg"
		download="{bonDeCommande.type}.pdf"
		href={bonDeCommande.path}>
		Télécharger le {bonDeCommande.type}
	</a>
</div>
