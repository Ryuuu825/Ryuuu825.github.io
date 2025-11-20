<script>
    import "./app.css";

    import Router from "svelte-spa-router";

    import { SvelteToast } from "@zerodevx/svelte-toast";

    import Nav from "./lib/Nav.svelte";
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

    function closeNav() {
        const nav = document.getElementById("nav");
        nav.classList.add("hidden");
        nav.classList.remove("animate-fade-in");
    }
</script>

<div
    class="w-screen h-screen overflow-x-hidden md:text-xs md:text-base xl:text-lg flex flex-col"
>
    <SvelteToast />

    <!-- the nav menu for mobile -->
    <div
        id="nav"
        class="hidden z-[100] absolute md:hidden flex flex-col items-center justify-center w-full h-full"
        style="background-color:#212529"
    >
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/"
            on:click={closeNav}
        >
            Home
        </a>

        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/projects"
            on:click={closeNav}
        >
            Projects
        </a>
        
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/skills"
            on:click={closeNav}
        >
            Skills
        </a>
        
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/experiences"
            on:click={closeNav}
        >
            Experiences
        </a>
        
        <a
            class="my-1 nav-link px-4 hover:bg-gray-500 text-center py-1 rounded-sm hover:text-white"
            href="#/about"
            on:click={closeNav}
        >
            About
        </a>

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
    <!-- main content -->
    <div class="p-12 md:p-24 pb-0 mb-auto w-full">
        <div
            class="md:flex md:flex-row w-full items-center z-[99] sticky top-0 pl-2 py-1 pb-1 md:py-0 bg-[#212529]"
        >
            <div class="flex items-center">
                <img
                    src="https://pub-e1bdc637877b460bb70a0e23fe8615ea.r2.dev/icon.png"
                    alt=""
                    class="inline-block md:w-12 md:h-12 h-8 w-8 rounded-full mr-5 ring-2 ring-offset-2 ring-offset-gray-900"
                />

                <div
                    class="flex flex-col md:flex-row md:justify-center md:items-center"
                >
                    <h1 class="font-extrabold text-xl md:text-3xl md:w-32">
                        Ken Lee
                    </h1>

                    <span
                        class="hidden md:inline-block w-0.5 h-5 bg-gray-200 md:mx-2"
                    />

                    <div
                        class="hidden md:flex justify-start items-center gap-1 h-[2.5rem]"
                        style="color:#718096"
                    >
                        <a
                            href="https://www.linkedin.com/in/ken-lee-461986303"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem"
                                height="1.5rem"
                                x="0px"
                                y="0px"
                                viewBox="0 0 50 50"
                                fill="white"
                            >
                                <path
                                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                                ></path>
                            </svg>
                        </a>

                        <a
                            href="https://github.com/Ryuuu825"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem"
                                height="1.5rem"
                                x="0px"
                                y="0px"
                                viewBox="0 0 50 50"
                                fill="white"
                            >
                                <path
                                    d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                                ></path>
                            </svg>
                        </a>
                    </div>

                    <span
                        class="hidden md:inline-block w-0.5 h-5 bg-gray-200 md:mx-2"
                    />
                    <h1 class="font-bold text-xs md:text-xl inline-block mt-1">
                        Software Engineer
                    </h1>
                    <!-- Cursor -->
                    <span
                        class="hidden md:inline-block w-1 h-4 mt-1 bg-gray-200 animate-cursor-blink relative mx-2"
                    />
                </div>

                <div
                    class="flex justify-end items-end ml-auto"
                    style="color:#718096"
                >
                    <!-- navigation button for mobile -->
                    <button
                        class="block md:hidden"
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

        <!-- nav -->
        <Nav />

        <main class="w-full pt-6 pb-6 xs:p-0 xm:p-24 md:p-12 overflow-hidden">
            <Router {routes} />
        </main>
    </div>

    <footer
        class="py-6 text-center text-xs border-t border-gray-500 md:mx-1 md:mx-24"
    >
        &copy; 2025 Ken Lee
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
