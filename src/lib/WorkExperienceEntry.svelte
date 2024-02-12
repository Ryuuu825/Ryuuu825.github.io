<script>
    export let company_icon_src;
    export let company_name;
    export let company_link;
    export let position;

    export let date;

    export let description = [];
</script>

<div class="border p-3 rounded-lg border-gray-500 text-gray-300 flex flex-col mb-5  r">
    <div class="flex flex-row">
        <img src={company_icon_src} alt="" class="object-fit w-12 h-12">
        <div class="flex flex-col ml-3">
            <span class="text-gray-100 text-base sm:text-lg">{position}</span>
            <a class="text-sm underline" href={company_link} target="_blank" rel="noreferrer" referrerpolicy="no-referrer">{company_name}</a>
        </div>
        <div class="ml-auto text-xs mt-2 hidden sm:block">
            {date}
        </div>
    </div>
    <div class="ml-auto text-xs mt-2 sm:hidden">
        {date}
    </div>
    <div class="hidden sm:block text-xs mt-3 ml-5 sm:ml-16">
        <ul class="list-disc list-inside mb-1">
            {#each description as desc}
                <li>{desc}</li>
            {/each}
        </ul>
    </div>
</div>

<style lang="postcss">

    :global( .r:hover ) {
        scale: 1.02;
    }

    :global( .r ) {
        transition: all 0.2s ease-in-out;
    }
</style>

