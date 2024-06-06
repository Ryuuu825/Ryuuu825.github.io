<script>

    import Pagination from "../lib/Pagination.svelte";
    import ProjectsEntry from "../lib/ProjectsEntry.svelte";
    import ProjectsTwoEntry from "../lib/ProjectsTwoEntry.svelte";

    const resolveProjectIconImagePath = (projectName) => {
        `https://raw.githubusercontent.com/Ryuuu825/${projectName}/master/assets/icon_portfolio.jpg`;
    }

    const resolveProjectMetaFilePath = (isPrivate, projectName) => {
        return `https://raw.githubusercontent.com/Ryuuu825/${projectName}/main/readme.md`;
    }


    let projects = [];
    projects.push(
        {
            component: ProjectsEntry,
            props: {
                id: 1,
                projectName: "ios-app-clone",
                isPrivateRepo: false,
                projectIconImagePath : "",
                projectMetaFilePath : resolveProjectMetaFilePath(false, "ios-app-clone"),
                projectDescription : "Clone of iOS app using SwiftUI",
            }
        },
        {   
            component: ProjectsEntry,
            props: {
                id: 2,
                projectName: "The Better Limited ERP System",
                isPrivateRepo: false,
                projectIconImagePath : "https://github.com/Ryuuu825/ITP4915M-2022/blob/master/docs/cover.png?raw=true",
                projectMetaFilePath : "https://raw.githubusercontent.com/Ryuuu825/ITP4915M-2022/Ryuuu825-patch-1/README.md",
                projectDescription : "Clone of iOS app using SwiftUI",
            }
        },
    )

    let pinnedProjects = [
        {
            component: ProjectsTwoEntry,
            props: {
                id: 1,
                projectName: "Ryuuu825.github.io",
                projectDescription : "My personal portfolio website",
                langugaeUsed : "Svelte",
                projReadmePath : "https://raw.githubusercontent.com/Ryuuu825/Ryuuu825.github.io/master/README.md"
            }
        },
        {
            component: ProjectsTwoEntry,
            props: {
                id: 1,
                projectName: "Intelligent Driver Information System",
                projectDescription : "An IDIS cooperating with CityBus Limited to detect driver's drowsiness and distraction",
                langugaeUsed : "Python, Svelte",
                projReadmePath: "https://raw.githubusercontent.com/sveltejs/svelte/main/README.md"
            }
        },
        
    ];
    document.title = "Ken's Portfolio - Projects";

</script>
<div class="w-full h-min -z-10 overflow-hidden">
    <h1 class="text-2xl font-bold mt-3 pb-3 mb-3 ">Pinned</h1>
    <div class="flex flex-row flex-wrap w-full justify-start sm:ml-8">
        <Pagination
            components={pinnedProjects}
            elementId="1"
            flexJustifyPos="justify-start"
        />
    </div>

    <div class="hidden sm:block">
        <h1 class="text-2xl font-bold mt-5 pb-3 mb-3 ">Others</h1>
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