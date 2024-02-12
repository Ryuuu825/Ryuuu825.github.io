<script>
    import "../app.css";
    import SvelteMarkdown from 'svelte-markdown'
    import { onMount } from "svelte";

    import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

    const loadProfileMd = async () => {

        const github_profile_md = fetch(
            "https://raw.githubusercontent.com/Ryuuu825/Ryuuu825/master/README.md"
        )
            .then((res) => res.text())
            .then((text) => text);

        // @ts-ignore
        return await github_profile_md;

    }

    
    onMount( async () => {

        const bg = document.getElementById("bg");

        // get client cursor position
        document.addEventListener("mousemove", (e) => {
            if (bg) {
                const x = e.clientX;
                const y = e.clientY;
                const bgWidth = bg.clientWidth;
                const bgHeight = bg.clientHeight;
                const bgX = bg.offsetLeft;
                const bgY = bg.offsetTop;

                // get the center of the bg image
                const bgCenterX = bgX + bgWidth / 2;
                const bgCenterY = bgY + bgHeight / 2;

                // get the distance between the cursor and the center of the bg image
                const distanceX = x - bgCenterX;
                const distanceY = y - bgCenterY;

                // get the percentage of the distance between the cursor and the center of the bg image
                const percentageX = distanceX / bgCenterX;
                const percentageY = distanceY / bgCenterY;

                // get the max distance between the cursor and the center of the bg image
                const maxDistanceX = bgCenterX - bgX;
                const maxDistanceY = bgCenterY - bgY;

                // get the max percentage of the distance between the cursor and the center of the bg image
                const maxPercentageX = maxDistanceX / bgCenterX;
                const maxPercentageY = maxDistanceY / bgCenterY;

                bg.style.transform = `translate(${percentageX * maxPercentageX * 10}px, ${percentageY * maxPercentageY * 10}px)`;
            }
        });

        // lazy load bg image
        const bgImage = bg?.getAttribute("data-background-image");
        if (bgImage) {
            bg.style.backgroundImage = `url(${bgImage})`;
            // check if width of client
            if (window.innerWidth < 768) {
                bg.style.backgroundSize = "cover";
                // set the height could be larger 
                bg.style.height = "8rem";
            } else {
                bg.style.height = "24rem";
            }
        }
    });

    document.title = "Ken's Portfolio - Home";


</script>

<div class="w-full h-min -z-10 overflow-hidden" >
    
    <div id="bg" class="w-full" data-background-image="/bg.png" />

    <div
        id="intro-text"
        class="sm:text-xs md:text-xl font-semibold pt-12 pb-12 b-0 flex flex-col gap-2"
    >
        {#await loadProfileMd()}
            <div>Fetching from github...</div>
        {:then text}
            <SvelteMarkdown source={text} />
        {/await}
    </div>
    
</div>

<style lang="postcss">


    #bg {
        /* change the cursor to a point */
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><path fill='%23ffffff' d='M8 3.6c-1.968 0-3.6 1.632-3.6 3.6s1.632 3.6 3.6 3.6 3.6-1.632 3.6-3.6-1.632-3.6-3.6-3.6zm0 5.4c-1.104 0-2-0.896-2-2s0.896-2 2-2 2 0.896 2 2-0.896 2-2 2z'/></svg>"), auto;
        user-select: none;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: all 0.5s ease;
    }

    :global(blockquote) {
        border-left: 0.25rem solid #718096;
        padding-left: 1rem;
        margin-left: 0;
        font-style: italic;
        font-size: 0.95rem;
        margin-top: 1rem;
        color: #9ea9b8;
    }

</style>

