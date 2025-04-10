<script>
    export let company_icon_src;
    export let company_name;
    export let company_link;
    export let position;

    export let date;

    export let description = [];
    export let tech = [];
</script>

<div
    class="border p-3 rounded-lg border-gray-500 text-gray-300 flex flex-col mb-5 w-full"
>
    <div class="flex flex-row items-start justify-start w-full">
        <div class="relative w-10 h-10">
            <img
                src={company_icon_src}
                alt=""
                class="object-fit rounded-xl w-10 h-10 absolute -top-2"
            />
        </div>
        <div class="flex flex-col ml-3">
            <span class="text-gray-100 text-base sm:text-lg">{position}</span>
            <a
                class="text-sm underline"
                href={company_link}
                target="_blank"
                rel="noreferrer"
                referrerpolicy="no-referrer">{company_name}</a
            >
        </div>
        <div class="ml-auto text-xs pt-2 hidden sm:block">
            {date}
        </div>
    </div>
    <div class="hidden sm:block text-xs mt-3 ml-5 sm:ml-16">
        <ul class="list-disc list-inside mb-1">
            {#each description as desc}
                <li>{desc}</li>
            {/each}
        </ul>
    </div>
    <div class="mb-1 text-xs mt-2 ml-12 mt-3 sm:ml-16">
        {#each tech as t}
            <div
                class="inline-block font-semibold bg-slate-500 text-white rounded-md px-1 mr-1"
            >
                {t}
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    :global(.r:hover) {
        scale: 1.02;
    }

    :global(.r) {
        transition: all 0.2s ease-in-out;
    }
</style>
