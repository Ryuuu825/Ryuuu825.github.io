<script>
    import { onMount } from "svelte";
    import SvelteMarkdown from "svelte-markdown";

    // Parse URL parameters more cleanly
    const urlParams = new URLSearchParams(
        window.location.hash.slice(1).split("?")[1] || ""
    );
    const readmePath = urlParams.get("readme") || "";
    const branch = urlParams.get("branch") || "master";
    const projectName = readmePath.split("/")[4] || "";

    // Content state
    let markdownContent = "";
    let isLoading = true;
    let error = null;

    // Helper functions for content transformation
    function fixImagePaths(content) {
        return content.replaceAll(
            `./`,
            `https://github.com/Ryuuu825/${projectName}/raw/${branch}/`
        );
    }

    function disableUnsafeElements(content) {
        return content
            .replaceAll(`<object`, `<objec`)
            .replaceAll(`<embed`, `<embe`);
    }

    function fixPdfLinks(content) {
        const pdfLinks = content.match(
            /https:\/\/github.com\/Ryuuu825\/[a-zA-Z0-9-]+\/([a-zA-Z0-9-]+\/)+[a-zA-Z0-9-]+.pdf/g
        );

        if (pdfLinks) {
            pdfLinks.forEach((pdfLink) => {
                const pdfLinkRaw = pdfLink.replace("raw", "blob");
                content = content.replaceAll(pdfLink, pdfLinkRaw);
            });
        }
        return content;
    }

    async function fetchContent() {
        isLoading = true;
        try {
            const response = await fetch(readmePath);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }

            let content = await response.text();
            content = fixImagePaths(content);
            content = disableUnsafeElements(content);
            content = fixPdfLinks(content);

            isLoading = false;
            return content;
        } catch (err) {
            console.error("Error fetching content:", err);
            error = err.message;
            isLoading = false;
            return null;
        }
    }

    function setupLinkBehavior() {
        document.querySelectorAll("a").forEach((a) => {
            if (!a.classList.contains("nav-link")) {
                a.setAttribute("target", "_blank");
                a.setAttribute("rel", "noopener noreferrer");
                if (a.href.includes("raw")) {
                    a.href = a.href.replace("raw", "blob");
                }
            }
        });
    }

    // Setup DOM after markdown is rendered
    function setupDocument() {
        setupLinkBehavior();
    }

    onMount(() => {
        // Initial content fetch
        fetchContent().then((content) => {
            markdownContent = content;
            // Use setTimeout to ensure DOM is updated after markdown render
            setTimeout(setupDocument, 0);
        });
    });
</script>

<div id="detail-container" class="xl:px-32 lg:px-2 sm:px-0">
    {#if isLoading}
        <div class="flex justify-center">
            <div
                class="animate-spin rounded-full h-32 w-32 border-b-4 border-white"
            />
        </div>
    {:else if error}
        <div class="text-red-500">Error loading content: {error}</div>
    {:else}
        <SvelteMarkdown source={markdownContent} on:parsed={setupDocument} />
    {/if}
</div>

<style>
    :global(#detail-container h1) {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding-top: 1rem;
    }

    :global(#detail-container h2) {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 1rem;
        border-top: 1px solid rgb(69, 75, 78);
        padding-top: 1rem;
    }

    :global(#detail-container p) {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    :global(#detail-container p > code) {
        font-size: 0.75rem;
        background-color: #444;
        color: rgb(255, 255, 255);
        padding: 0.15rem 0.45rem;
        border-radius: 0.25rem;
        display: inline-block;
        margin: 0.25rem 0.25rem;
    }

    :global(#detail-container pre > code) {
        font-size: 0.75rem;
        background-color: #444;
        color: rgb(255, 255, 255);
        padding: 0.4rem 1rem;
        margin: 0.25rem 0.15rem;
        border-radius: 0.25rem;
        display: inline-block;
        user-select: text;
    }

    :global(#detail-container p::first-letter) {
        padding-left: 1rem /* 48px */;
    }

    :global(#detail-container ul) {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    :global(#detail-container li) {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        list-style-type: disc;
        list-style-position: inside;
        margin-left: 2rem;
    }

    :global(#detail-container img) {
        border-radius: 10px;
    }
    :global(#detail-container table) {
        width: 100%;
        border: 1px solid rgb(69, 75, 78);
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    :global(#detail-container th) {
        border: 1.5px solid white;
        padding: 0.5rem;
    }

    :global(#detail-container td) {
        border: 0.5px solid gray;
        padding: 0.5rem;
    }

    :global(#detail-container code) {
        user-select: none;
    }

    :global(#detail-container a) {
        color: rgb(255, 255, 255);
        text-decoration: underline;
    }

    :global(img) {
        max-width: 100%;
        height: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>
