<script>
    import { onMount } from 'svelte';

    import SvelteMarkdown from 'svelte-markdown'
    import { toast } from "@zerodevx/svelte-toast";

    let projectName = window.location.hash.slice(1).split("?")[1].split("=")[1].split("/")[4];
    let readmePath = window.location.hash.slice(1).split("=")[1];

    const fetchContent = async () => {
        try {
            const response = await fetch(readmePath);
            if (response.ok) {
                let content = await response.text();
                // https://github.com/Ryuuu825/ios-app-clone/raw/main/assets/mcl-cinemas/mcl-cinemas.gif
                content = content.replaceAll(`./`, `https://github.com/Ryuuu825/${projectName}/raw/master/`);

                // remove all <object> tag
                content = content.replaceAll(`<object`, `<objec`);
                content = content.replaceAll(`<embed`, `<embe`);
                
                // change all pdf links to github blob links
                const pdfLinks = content.match(/https:\/\/github.com\/Ryuuu825\/[a-zA-Z0-9-]+\/([a-zA-Z0-9-]+\/)+[a-zA-Z0-9-]+.pdf/g);
                if (pdfLinks != null) {
                    pdfLinks.forEach((pdfLink) => {
                        const pdfLinkRaw = pdfLink.replace("raw", "blob");
                        content = content.replaceAll(pdfLink, pdfLinkRaw);
                    });
                }
                return content;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const get = () => {
        // change all a tags to open in new tab
        document.querySelectorAll("a").forEach((a) => {
            if (!a.classList.contains("nav-link")) {
                a.setAttribute("target", "_blank");
                a.setAttribute("rel", "noopener noreferrer");
                if (a.href.includes("raw")) {
                    a.href = a.href.replace("raw", "blob");
                }
            }
        });

        document.querySelectorAll("pre > code").forEach((pre) => {
            pre.addEventListener("click", (e) => {
                // get the text content of the <pre>
                // @ts-ignore
                navigator.clipboard.writeText(e.target.innerText);
                toast.push("Copied to clipboard!");
                
            });
        });
    }

    
</script>

<div id="detail-container" class="xl:px-32 lg:px-2 sm:px-0 ">
    {#await fetchContent()}
        <div class="flex justify-center">
            <div
                class="animate-spin rounded-full h-32 w-32 border-b-4 border-white"
            />
        </div>
    {:then content}
        <div on:load={get()}>
            <SvelteMarkdown source={content} />
        </div>
    {/await}
</div>


<style>
    :global(#detail-container  h1 ) {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding-top: 1rem;
    }

    :global(#detail-container  h2 ) {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 1rem;
        border-top: 1px solid rgb(69, 75, 78);
        padding-top: 1rem;
    }

    :global(#detail-container  p ) {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

    }

    :global(#detail-container p > code ) {
        font-size: 0.75rem ;
        background-color:  #444;;
        color: rgb(255, 255, 255);
        padding: 0.15rem 0.45rem;
        border-radius: 0.25rem;
        display: inline-block;
        margin: 0.25rem 0.25rem;
    }

    :global(#detail-container pre > code ) {
        font-size: 0.75rem ;
        background-color:  #444;;
        color: rgb(255, 255, 255);
        padding: 0.4rem 1rem;
        margin: 0.25rem 0.15rem;
        border-radius: 0.25rem;
        display: inline-block;
        user-select: text;
    }

    :global(#detail-container p::first-letter ) {
        padding-left: 1rem /* 48px */;
    }

    :global(#detail-container ul ) {

        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

    }


    :global(#detail-container li ) {
       
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        list-style-type: disc;
        list-style-position: inside;
        margin-left: 2rem;
        
    }

    :global(#detail-container img ) {
        border-radius: 10px;
    }
    :global(#detail-container table ) {
        width: 100%;
        border: 1px solid rgb(69, 75, 78);
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    :global(#detail-container th ) {
        border: 1.5px solid white;
        padding: 0.5rem;
    }

    :global(#detail-container td ) {
        border: 0.5px solid gray;
        padding: 0.5rem;
    }

    :global(#detail-container code ) {
        user-select: none;
    }

    :global(#detail-container a ) {
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
