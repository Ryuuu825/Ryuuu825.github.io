<script>
    import "./app.css";

    import Router from "svelte-spa-router";
    import { onMount } from "svelte";

    import { SvelteToast } from "@zerodevx/svelte-toast";
    import { toast } from "@zerodevx/svelte-toast";

    // Routes
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Experiences from "./routes/Experiences.svelte";
    import ComingSoon from "./routes/ComingSoon.svelte";
    import Skills from "./routes/Skills.svelte";
    import Projects from "./routes/Projects.svelte";
    import ProjectsDetails from "./routes/ProjectsDetails.svelte";

    let routes = {
        "/": Home,
        "/about": About,
        "/experiences": Experiences,
        "/skills": Skills,
        "/projects": Projects,
        "/projects/:id": ProjectsDetails,
        "*": ComingSoon,
    };
    let navLinks = document.querySelectorAll("nav-link");

    function handleATagClick(element) {
        navLinks.forEach((aTag) => {
            aTag.classList.remove("active-link");
        });
        
        element.classList.add("active-link");
        // close the nav menu for mobile
        const nav = document.getElementById("nav");
        // fade-out animation
        nav.classList.toggle("animate-fade-in");
        // wait for the animation to finish
        setTimeout(() => {
            nav.classList.toggle("hidden");
        }, 100);
    }

    onMount(() => {
        onRouteChange()

        // add listener to window location change
        window.addEventListener("hashchange", ()=>{onRouteChange()});

    });

    // onRouteChange
    function onRouteChange() {
        navLinks = document.querySelectorAll(".nav-link");
        const currentRoute = window.location.hash.slice(1);

        navLinks.forEach((aTag) => {
            if (aTag.getAttribute("href").slice(1) === currentRoute) {
                aTag.classList.add("active-link");
            } else if (
                currentRoute === "" &&
                aTag.getAttribute("href").slice(1) === "/"
            ) {
                aTag.classList.add("active-link");
            }
        });
    }


</script>

<div class="w-screen h-screen overflow-x-hidden sm:text-xs md:text-base xl:text-lg flex flex-col ">

    <SvelteToast />

    <!-- the nav menu for mobile -->
    <div id="nav" class="z-[100] hidden absolute sm:hidden flex flex-col items-center justify-center w-full h-full "
    style="background-color:#212529">
        <!-- the cross to exit the menu -->
       
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white nav-link"
            href="#/"
            on:click={(e) => handleATagClick(e.target)}>Home</a
        >

        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/projects"
            on:click={(e) => handleATagClick(e.target)}>Projects</a
        >
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/skills"
            on:click={(e) => handleATagClick(e.target)}>Skills</a
        >
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/experiences"
            on:click={(e) => handleATagClick(e.target)}>Experiences</a
        >
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/about"
            on:click={(e) => handleATagClick(e.target)}>About me</a
        >

        <button
        class="absolute top-0 right-0 m-5"
        on:click={() => {
            const nav = document.getElementById("nav");
            nav.classList.toggle("hidden");
            // the nav menu coming down animation
            nav.classList.toggle("animate-fade-in");
        }}
        >
            <i class="fas fa-times fa-2x scale-75 text-white"></i>
        </button>
        
    </div>

    <div class="p-12 md:p-24 pb-0 mb-auto">
        <div class="md:flex md:flex-row w-full items-center z-[99] sticky top-0 py-3 pb-5 md:py-0 "
            style="background-color: #212529;"
        >
            
            <div class="flex items-center">
                <img
                src="https://avatars.githubusercontent.com/u/85796869?v=4"
                alt=""
                class="inline-block w-12 h-12 rounded-full mr-5"
            />

            <div class="flex flex-col sm:flex-row sm:justify-center sm:items-center">
                <h1 class="font-extrabold text-xl sm:text-3xl sm:w-32 ">Ken Lee</h1>
                <span
                    class="hidden sm:inline-block w-0.5 h-5 bg-gray-200 sm:mx-2"
                />
                <h1 class="font-bold text-xs md:text-xl inline-block mt-1">Software Engineer</h1>
                <!-- Cursor -->
                <span
                    class="hidden sm:inline-block w-1 h-4 mt-1 bg-gray-200 animate-cursor-blink relative mx-2"
                />
            </div>

            <div class="flex justify-end items-end ml-auto" style="color:#718096">
                <!-- navigation button for mobile -->
                <button
                    class=" block sm:hidden"
                    on:click={() => {
                        const nav = document.getElementById("nav");
                        nav.classList.toggle("hidden");
                        // the nav menu coming down animation
                        nav.classList.toggle("animate-fade-in");
                    }}
                >
                    <i class="fas fa-bars fa-2x scale-75 text-white"></i>
                </button>
            </div>
    
        </div>
            
        </div>
        <div
            class="sm:flex flex-row md:pt-10 sm:pt-10 w-full border-b pb-3 border-gray-500 z-[99] sm:sticky top-0 "
            style="background-color: #212529;"
        >
            <div class="hidden sm:flex sm:flex-row w-max text-center" style="color:#718096">
                <a
                    class="nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white nav-link"
                    href="#/"
                    on:click={(e) => handleATagClick(e.target)}>Home</a
                >

                <a
                    class=" nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
                    href="#/projects"
                    on:click={(e) => handleATagClick(e.target)}>Projects</a
                >
                <a
                    class="nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
                    href="#/skills"
                    on:click={(e) => handleATagClick(e.target)}>Skills</a
                >
                <a
                    class="nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
                    href="#/experiences"
                    on:click={(e) => handleATagClick(e.target)}>Experiences</a
                >
                <a
                    class="nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
                    href="#/about"
                    on:click={(e) => handleATagClick(e.target)}>About me</a
                >
                <a
                    class="nav-link px-4 bg-gray-200 text-black text-center py-1 rounded-sm cursor-pointer select-none ml-3"
                    style="color:#000"
                    href="#/resume"
                    on:click={(e) => handleATagClick(e.target)}
                >
                    Resume
                </a>
            </div>
        </div>

        <main class="w-full pt-6 pb-6 xs:p-0 xm:p-24 md:p-12 overflow-hidden ">
            <Router {routes} />
        </main>
        
    </div>

    <footer
        class="py-6 text-center text-xs border-t border-gray-500 sm:mx-1 md:mx-24"
    >
        &copy; 2023 Ken Lee
    </footer>
</div>

<style lang="postcss">
    :global(html) {
        background-color: #212529;
        color: hsla(0, 0%, 100%, 0.85);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
            "Segoe UI Symbol";
    }
    
    .nav-link:hover {
        background-color: #3d3d3d;
        color: #ececec !important;
    }
</style>
