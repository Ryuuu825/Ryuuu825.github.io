<script>
    import Pagination from "../lib/Pagination.svelte";
    import ProjectsEntry from "../lib/ProjectsEntry.svelte";
    import PinnedProjectsEntry from "../lib/PinnedProjectsEntry.svelte";

    let projects = [
        {
            component: ProjectsEntry,
            props: {
                id: 1,
                projectName: "ios-app-clone",
                projectIconImagePath:
                    "https://github.com/Ryuuu825/ios-app-clone/blob/main/assets/image.png?raw=true",
                projectMetaFilePath:
                    "https://raw.githubusercontent.com/Ryuuu825/ios-app-clone/main/readme.md",
                projectDescription: "Clone of iOS app using SwiftUI",
                projectRepoBranch: "main",
            },
        },
        {
            component: ProjectsEntry,
            props: {
                id: 2,
                projectName: "The Better Limited ERP System",
                projectIconImagePath:
                    "https://github.com/Ryuuu825/ITP4915M-2022/blob/master/docs/cover.png?raw=true",
                projectMetaFilePath:
                    "https://raw.githubusercontent.com/Ryuuu825/ITP4915M-2022/Ryuuu825-patch-1/README.md",
                projectDescription: "Clone of iOS app using SwiftUI",
                projectRepoName: "ITP4915M-2022",
            },
        },
    ];

    let pinnedProjects = [
        {
            component: PinnedProjectsEntry,
            props: {
                id: 1,
                projectName: "Intelligent Driver Information System",
                projectDescription:
                    "An IDIS cooperating with CityBus Limited to detect driver's drowsiness and distraction",
                langugaeUsed: "Python, Svelte",
                projReadmePath:
                    "https://raw.githubusercontent.com/sveltejs/svelte/main/README.md",
            },
        },
    ];
    document.title = "Ken's Portfolio - Projects";
</script>

<div class="w-full h-min -z-10 overflow-hidden">
    <h1 class="text-2xl font-bold mt-3 pb-3 mb-3">Pinned</h1>
    <div class="flex flex-row flex-wrap w-full justify-start sm:ml-8">
        <Pagination
            components={pinnedProjects}
            elementId="1"
            flexJustifyPos="justify-start"
        />
    </div>

    <div class="hidden sm:block">
        <h1 class="text-2xl font-bold mt-5 pb-3 mb-3">Others</h1>
        <div class="ml-8 hidden sm:block">
            <Pagination
                components={projects}
                elementId="2"
                flexJustifyPos="justify-start"
            />
        </div>
    </div>
</div>

<style>
</style>
