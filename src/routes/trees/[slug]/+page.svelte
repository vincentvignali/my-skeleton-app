<script lang='ts'>
export let data

import {} from '@skeletonlabs/skeleton'

console.log('tree page has received',data)
</script>

<div>
    <h2 class="text-center text-3xl w-3/4 mx-auto">{data.name}</h2>
<p class="mt-3 "><span class="rounded p-1 bg-green-100 text-green-400">Taille moyenne :</span> {data.averageSize} mètres</p>
<p class="mt-3 "><span class="rounded p-1 bg-green-100 text-green-400">Se collecte à la saison suivant :</span> {data.seasonToCollect}</p>
<p class="mt-3 "><span class="rounded p-1 bg-green-100 text-green-400">Se plante à la saison suivant :</span> {data.seasonToPlant}</p>
</div>
