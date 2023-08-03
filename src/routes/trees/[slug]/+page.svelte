<script lang='ts'>
export let data
import { IconTrees } from '@tabler/icons-svelte';
console.log('tree page has received',data)
</script>

<div>
    <div class="text-3xl w-3/4 mx-auto flex justify-center">
        <IconTrees size={35} stroke={1.5} class='stroke-black mr-2'/>
        <h2>
            {data.name}
        </h2>
    </div>
<p class="mt-3 "><span class="rounded p-1 bg-green-100 text-green-700">Taille moyenne :</span> {data.averageSize} mètres</p>
<p class="mt-3 "><span class="rounded p-1 bg-green-100 text-green-700">Se collecte à la saison suivant :</span> {data.seasonToCollect}</p>
<p class="mt-3 "><span class="rounded p-1 bg-green-100 text-green-700">Se plante à la saison suivant :</span> {data.seasonToPlant}</p>
</div>
