<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { IconArrowBack } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	$page;
	console.log($page);
</script>

<AppShell class="">
	<div class="w-11/12 h-full mx-auto bg-primary-500 dark:bg-white transition-colors duration-300">
		<h1 class="h1 dark:text-primary-500 text-white text-center py-10">Prototype du Piton</h1>

		{#if $page.route.id != '/'}
			<a href="/">
				<button class="mx-auto bg-red-200 rounded text-red-700 my-2 font-schoolBell flex gap-3 p-2 dark:visible invisible">
					<IconArrowBack /> Retour à l'acceuil
				</button>
			</a>
		{/if}
		<slot />
	</div>
</AppShell>
