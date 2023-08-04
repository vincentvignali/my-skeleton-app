<script lang='ts'>
export let data
import { IconTrees } from '@tabler/icons-svelte';
</script>

<div>
    <div class="text-3xl w-3/4 mx-auto flex justify-center">
        <IconTrees size={35} stroke={1.5} class='stroke-green-700  mr-2'/>
        <h2 class="text-primary-500">
            {data.name}
        </h2>
    </div>
<p class="text-primary-500 mt-3 "><span class="rounded p-1 bg-green-100 text-green-700">Taille moyenne :</span> {data.averageSize} mètres</p>
<p class="text-primary-500 mt-3 "><span class="rounded p-1 bg-green-100 text-green-700">Se collecte à la saison suivant :</span> {data.seasonToCollect}</p>
<p class="text-primary-500 mt-3 "><span class="rounded p-1 bg-green-100 text-green-700">Se plante à la saison suivant :</span> {data.seasonToPlant}</p>
</div>
