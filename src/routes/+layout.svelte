<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<div class="w-11/12 mx-auto bg-primary-500 dark:bg-white transition-all duration-75">
		<slot />
	</div>
</AppShell>
