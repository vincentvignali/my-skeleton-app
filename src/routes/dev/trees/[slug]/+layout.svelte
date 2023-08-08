<script>
	import { page } from '$app/stores';
    import { assets, base } from '$app/paths'

    export let data 
</script>


<div class="w-3/4 mx-auto mt-10 rounded ">
    <a href="{$page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/'))}">
        <button class="bg-red-200 p-1 rounded text-red-700 my-2">
        Retour à la liste
        </button>
    </a>
    <div class="border-2 border-green-500 rounded p-5">
        <slot />
    </div>

    <div class="mt-10">
        <p class="w-fit mx-auto my-0 p-3 rounded text-white h-auto">
            Today is {data.today.toLocaleDateString()}.
        </p>
        <p class="w-fit mx-auto my-0 p-3 rounded text-white h-auto">
            The farm counts a total of {data.allTrees.length} trees so far.
        </p>
    </div>
</div>