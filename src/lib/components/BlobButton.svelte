<script lang="ts">
	$: svgStyle = 'bg-blob-1';
	const primary = 'fill-primary-500';
	const white = 'fill-white';
	import SvgBlob from '$lib/blobs/blob-haikei.svg?raw'; // note suffix

</script>

<div
	class="flex justify-center text-primary-500 bg-transparent bg- h-52 w-52 bg-cover bg-center border-none outline-none rounded-none {svgStyle}"
	on:mouseenter={(el) => (svgStyle += '-reversed')}
	on:mouseleave={() => (svgStyle = svgStyle.replace('-reversed', ''))}
>
	<object class="fill-slate-200" title="blob" data="blobs/blob-haikei.svg" type="image/svg+xml">
		<button class="btn fill-slate-600"> La ferme </button>
	</object>
</div>
<div class="[&>path]:fill-slate-500">
	{@html SvgBlob}
</div>
