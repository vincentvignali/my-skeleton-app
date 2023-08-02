<script>
    export let data 
    console.log('LayoutUi has Received : ',data)
</script>


<div class="w-3/4 mx-auto mt-10 rounded ">
    <a href="/trees">
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
            The farm counts a total of {data.totalLength} trees so far.
        </p>
    </div>
</div>