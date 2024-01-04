<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { IconArrowBack } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	$page;
</script>

<AppShell>
	<div class="w-11/12 h-full mx-auto transition-colors duration-300 pb-16">
		<h1 class="h1 text-center py-10">Prototype du Piton</h1>
		<slot />
	</div>
</AppShell>
