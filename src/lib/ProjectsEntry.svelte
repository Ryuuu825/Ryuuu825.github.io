<script>
    export let id;
    export let parentId = "1";
    export let projectName = "";
    export let projectDescription = "";

    export let projectIconImagePath = null;
    export let projectMetaFilePath = null;

    // default value to find readme and the image
    export let projectRepoName = "";
    export let projectRepoBranch = "master";

    function handleMouseEnter() {
        document.querySelectorAll(".project-card").forEach((card) => {
            if (card.id !== `p-${id}`) {
                card.classList.add("non-hovered");
            }
        });
    }

    function handleMouseLeave() {
        document.querySelectorAll(".project-card").forEach((card) => {
            card.classList.remove("non-hovered");
        });
    }

    function handleClick(event) {
        if (event.target.closest("a")) return;

        window.open(
            `/#/projects/${projectName}?readme=${
                projectMetaFilePath == null
                    ? `https://raw.githubusercontent.com/Ryuuu825/${projectRepoName}/${projectRepoBranch}/readme.md`
                    : projectMetaFilePath
            }&branch=${projectRepoBranch}`,
            "_self"
        );
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="project-card w-[17.5rem] h-[27rem] rounded-xl mx-3 my-3 pagination-{parentId}-element overflow-hidden cursor-pointer shadow-lg"
    id="p-{id}"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:click={handleClick}
>
    <div class="h-[10rem]">
        <img
            class="w-full h-full object-cover"
            alt={projectName}
            src={`${
                projectIconImagePath === null
                    ? `https://github.com/Ryuuu825/${projectRepoName}/blob/${projectRepoBranch}/docs/cover.png?raw=true`
                    : projectIconImagePath
            }`}
        />
    </div>
    <div class="p-5 h-[calc(100%-10rem)] flex flex-col">
        <div class="font-bold text-2xl h-[5rem]">
            {projectName}
        </div>

        <div class="font-normal text-base mt-2">
            {projectDescription}
        </div>

        <div class="flex flex-row mt-auto">
            <a
                href={`${
                    projectRepoName == null
                        ? `https://github.com/Ryuuu825/${projectName}`
                        : `https://github.com/Ryuuu825/${projectRepoName}`
                }`}
                target="_blank"
                class="text-sm mt-auto mb-3"
                rel="noreferrer"
            >
                <img
                    src="/github.png"
                    alt="GitHub repository"
                    class="w-6 h-6 hover:scale-110 transition-transform"
                />
            </a>
        </div>
    </div>
</div>

<style>
    .project-card {
        background-color: #444;
        transition:
            transform 0.4s ease-in-out,
            height 0.9s ease-in-out;
    }

    .project-card:hover {
        transform: scale(1.05);
    }

    .non-hovered {
        transform: scale(0.95);
    }
</style>
