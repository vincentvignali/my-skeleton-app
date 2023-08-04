<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import BlobButton from './../lib/components/BlobButton.svelte';
	import { onMount } from 'svelte';
	import Svg1 from '../../static/blobs/blob-haikei.svg';
	import { createRecord, getAllRecords } from '../pocketBase';
	
	let items : any
	const fetchItems = () => {
		getAllRecords().then((res) => items = res)
	}

	const createAnItem = () => {
		createRecord().then(() => fetchItems())
	}

	onMount(() => {
		getAllRecords().then((res) => items = res)
	})
	</script>


<h1 class="h1 text-primary-500 text-center">Prototype du Piton</h1>
<div class="mx-auto flex justify-center items-center w-full">
	<div class="p-2 w-fit">
		<p class="font-light text-primary-500"><b>Fonctionnalités : </b></p>
		<ul>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-success p-2">Page d'une liste d'arbre</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-success p-2">Page d'un arbre</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-success p-2">Utilisation de tableau et l'application</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-success p-2">Connexion à une Api PocketBase</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-success p-2">Fetch depuis l'api : Get et Post</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-success p-2">Routing system</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-error p-2 ">Animated Blob Button</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-error p-2">Animated Starting point</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-error p-2">Inversion des couleur sur hover d'un blob</p></li>
			<li><p class="mt-2 code break-words whitespace-normal variant-outline-error p-2">Carrousel image photo</p></li>
		</ul>
		<a href="/trees" class="w-full"
			><button class="my-0 mx-auto block btn variant-ghost-primary mt-10">
				Voir la liste des arbres</button
			></a
			>
			<div class="container variant-ghost-tertiary p-2 rounded mt-2">
				<h2 class="text-3xl text-primary-500 m-2 text-center">Api Test</h2>
				<button on:click={() => createAnItem()} class="my-2 mx-auto block btn variant-ghost-primary">Create a pocket record</button>
				<div class="flex justify-center items-center flex-wrap">

					{#if items}
					<!-- content here -->
					{#each items as item}
					<div class="text-center p-1 w-1/3 m-1 border-2 rounded variant-outline-secondary">
						<div class="text-primary-500">Name: {item.name}</div>
						<div class="text-primary-500">ID: {item.id}</div>
					</div>
					{/each}
					{:else}
					<div class="text-primary-500 p-2">loading</div>
					{/if}
					
				</div>
			</div>
			<div class="container variant-ghost-tertiary p-2 rounded mt-2">
				<div class="flex justify-center items-center flex-col">
					<h2 class="text-3xl text-primary-500 m-2">Blob Button expriment</h2>
					<BlobButton svg={Svg1} position={'center'} />
				</div>
			</div>
	</div>
</div>
