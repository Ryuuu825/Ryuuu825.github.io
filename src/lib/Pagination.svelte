<!-- pagination -->
<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    export let elementId = "1";
    // receive a list of components
    export let components = [];
    export let defaultPage = 1;

    export let flexJustifyPos = "justify-center"

    let currentIndex = 0;
    let currentPage = defaultPage;
    let perPage = 3;
    let totalPages = Math.ceil(components.length / perPage);

    let elements;
    let ctx;

    const updateElements = (dir) => {
        elements.forEach((element, index) => {
            element.classList.remove("animate-fade-in-from-left");
            element.classList.remove("animate-fade-in-from-right");
            element.classList.remove("animate-fade-in-from-left");

            if (index >= currentIndex && index < currentIndex + perPage) {
                if (dir === "left") {
                    element.classList.add("animate-fade-in-from-left");
                } else if (dir === "right") {
                    element.classList.add("animate-fade-in-from-right");
                } else {
                    element.classList.add("animate-fade-in");
                }
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
    };

    onMount(() => {
        // get the width of the div
        perPage = Math.floor(ctx.offsetWidth / 320);

        // when ctx.offsetWidth changes, update the perPage variable
        const observer = new ResizeObserver((entries) => {
            perPage = Math.floor(ctx.offsetWidth / 320);
            totalPages = Math.ceil(components.length / perPage);
            // current page should be based on current index and the new perPage
            currentPage = Math.ceil(currentIndex / perPage) + 1;
            updateElements();
        });

        observer.observe(ctx);

        // hide the elements that are not in the current page
        elements = document.querySelectorAll(`.pagination-${elementId}-element`);
        updateElements("left");

    });
</script>

<div class="w-full" id={`pagination-${elementId}`} bind:this={ctx}>
    <section class="flex {flexJustifyPos} flex-wrap">
        {#each components as c}
            <svelte:component this={c.component} {...c.props} parentId={elementId} />
        {/each}
    </section>
    {#if totalPages != 1}
        <div
            class="flex flex-row justify-center w-full mx-auto items-center mt-12 "
        >
            <button
                class="p-3 bg-gray-400 rounded-lg text-white mx-3 px-6"
                style="background-color: #444;"
                on:click={() => {
                    if (currentPage === 1) return;
                    currentPage--;
                    currentIndex = (currentPage - 1) * perPage;

                    updateElements("right");
                }}>Prev</button
            >
            {#each Array(totalPages).fill(0) as _, i}
                <button
                    class={"p-3 rounded-lg text-white mx-1  " +
                        (currentPage === i + 1
                            ? "border opacity-50  cursor-default "
                            : "  cursor-pointer  ")}
                    style="background-color: #444;"
                    on:click={() => {
                        if (currentPage === i + 1) return;
                        currentPage = i + 1;
                        currentIndex = (currentPage - 1) * perPage;

                        updateElements();
                    }}>{i + 1}</button
                >
            {/each}
            <button
                class="p-3 bg-gray-400 rounded-lg text-white mx-3 px-6"
                style="background-color: #444;"
                on:click={() => {
                    if (currentPage === totalPages) return;
                    currentPage++;
                    currentIndex = (currentPage - 1) * perPage;

                    updateElements("left");
                }}>Next</button
            >
        </div>
    {/if}
</div>

<style>
    button:hover {
        background-color: #555 !important;
    }
</style>
