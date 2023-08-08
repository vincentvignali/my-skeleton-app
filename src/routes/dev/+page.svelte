<script>
	import { page } from "$app/stores";
</script>

<div class="mx-auto flex justify-center items-center w-full">
	<div class="pb-10 w-fit">
		<div class="container mx-auto border-2 rounded-lg p-5 border-primary-500 mb-10">
			<a href="{$page.url.pathname}{$page.url.pathname}/homepage" class="w-full"
				><button class="my-0 mx-auto block btn variant-ghost-primary mt-3 text-lg font-bold w-full">
					Voir page d'accueil</button
				></a
			>
			<a href="{$page.url.pathname}/workshops" class="w-full"
				><button class="my-0 mx-auto block btn variant-ghost-primary mt-3 text-lg font-bold w-full">
					Voir la liste des ateliers</button
				></a
			>
			<a href="{$page.url.pathname}/trees" class="w-full"
				><button class="my-0 mx-auto block btn variant-ghost-primary mt-3 text-lg font-bold w-full">
					Voir la liste des arbres</button
				></a
			>
			<a href="{$page.url.pathname}/apiPlayground" class="w-full"
				><button class="my-0 mx-auto block btn variant-ghost-primary mt-3 text-lg font-bold w-full">
					Jouer avec l'api</button
				></a
			>
		</div>
		<p class="text-primary-500 text-center underline text-2xl font-schoolBell font-bold">
			<b>Dev en cours : </b>
		</p>
		<ul>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-success p-3 text-lg">
					Page d'une liste d'arbre
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-success p-3 text-lg">
					Page d'un arbre
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-success p-3 text-lg">
					Utilisation de tableau et l'application
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-success p-3 text-lg">
					Connexion à une Api PocketBase
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-success p-3 text-lg">
					Fetch depuis l'api : Get et Post
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-success p-3 text-lg">
					Routing system
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-error p-3 text-lg">
					Blob Button HoverEffet
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-error p-3 text-lg">
					Animation à l'arrivée sur la site : Cf Gsap & webGl
				</p>
			</li>
			<li>
				<p class="mt-2 code break-words whitespace-normal variant-outline-error p-3 text-lg">
					Carrousel image photo
				</p>
			</li>
		</ul>
	</div>
</div>
