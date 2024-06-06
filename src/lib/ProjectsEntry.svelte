<script>
    import { onMount } from "svelte";

    export let id;
    export let parentId="1";
    export let projectName = "";
    export let projectIconImagePath;
    export let projectDescription = "";
    export let projectMetaFilePath = "";

    let width = "w-[17.5rem]";
    let height = "h-[15rem]";
    let mainContentHeight = "h-full";

    let ImageLoaded = false;

    const fetchImage = async () => {
        try {
            const img_response = await fetch(projectIconImagePath);
            if (img_response.ok) {
                // change the container height to 25rem
                ImageLoaded = true;
                return img_response.blob();
            }
        } catch (error) {
            ImageLoaded = true;
            return null;
        }
    };

    onMount(async () => {
        let img = await fetchImage();
        if (img != null) {
            const img_url = URL.createObjectURL(img);
            const img_container = document.getElementById(`p-${id}-img`);
            // @ts-ignore
            img_container.src = img_url;
            img_container.style.height = "10rem";
            height = "h-[25rem]";
            mainContentHeight = "h-[15rem]";
        }
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="{width} {height} rounded-xl mx-3 my-3 pagination-{parentId}-element  overflow-hidden cursor-pointer shawdow-lg pe-container hover:scale-105 {((ImageLoaded) ? " " : " animate-pulse")}"
    style="background-color: #444;transition: height 0.9s ease-in-out;transition: filter 0.4s ease-in-out;transition: transform 0.4s ease-in-out;"
    id="p-{id}"
    on:mouseenter={() => {
        // get all the pe-container elements
        const peContainers = document.getElementsByClassName("pe-container");
        // add non-hovered class to all pe-container elements
        for (let i = 0; i < peContainers.length; i++) {
            if (peContainers[i].id != `p-${id}`)
                peContainers[i].classList.add("non-hovered");
        }
    }}
    on:mouseleave={() => {
        // get all the pe-container elements
        const peContainers = document.getElementsByClassName("pe-container");
        // remove non-hovered class to all pe-container elements
        for (let i = 0; i < peContainers.length; i++) {
            peContainers[i].classList.remove("non-hovered");
        }
    }}
    on:click={(ev) => {
        // if it click on a tag, do nothing
        // @ts-ignore
        if (ev.target.tagName == "A") return;
        window.open(`/#/projects/${projectName}?readme=${projectMetaFilePath}`, "_self");
    }}
>
    <img
        class="w-full h-0 text-center flex justify-center items-center object-cover"
        style="background-size: cover;background-position: center;transition: all 1s ease-in-out;"
        alt=""
        id="p-{id}-img"
    />
    <div class="main-content p-5 {mainContentHeight} flex flex-col">
        <div class="font-bold text-2xl">
            {projectName}
        </div>

    
        <div class="font-normal text-base mt-2">
            {projectDescription}
        </div>

        <div class="flex flex-row mt-auto">
        
            <a
                href={`https://github.com/Ryuuu825/${projectName}`}
                target="_blank"
                class="text-sm mt-auto mb-3 underline"
                rel="noreferrer"
            >
                <img src="/github.png" alt="" class="object-fit w-6 h-6 hover:scale-110" />
            </a>
        </div>
    </div>
</div>

<style>
    .non-hovered {
        transform: scale(0.95);
        filter: blur(0.9px);
    }


</style>
