<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { IconArrowBack } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	$page;
</script>

<AppShell>
	<div class="w-11/12 h-full mx-auto transition-colors duration-300 pb-16">
		<slot />
	</div>
</AppShell>
