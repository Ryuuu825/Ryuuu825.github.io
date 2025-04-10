<script>

    export let id;
    export let projectName = "";
    export let projectDescription = "";
    export let langugaeUsed = "";
    export let projReadmePath = "";

    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="border border-gray-500 rounded-lg mx-3 my-3 overflow-hidden cursor-pointer px-5 py-4 w-full sm:w-[45%] hover:scale-105 transition-all duration-300"
    on:click={(ev) => {
        // @ts-ignore
        if (ev.target.tagName == "A") return;
        window.open(`/#/projects/${projectName}?readme=${projReadmePath}`, "_self");
    }}
>
    <div class="flex flex-col justify-start w-fit ">
        <div class="flex flex-row justify-start items-center w-fit text-base">
            {projectName}
        </div>
        <div class="font-normal text-gray-400 mt-2 text-sm overflow-hidden">
            {projectDescription}
        </div>
        <div class="flex flex-row items-center mt-2">
            <div class="h-2.5 w-2.5 bg-orange-500 rounded mr-1">
            </div>
            <div class="font-normal text-xs text-gray-400">
                {langugaeUsed}
            </div>
        </div>
    </div>
</div>
