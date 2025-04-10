<script>
    import { onMount } from "svelte";

    let NavRoutes = [
        {
            href: "#/",
            text: "Home",
            active: true,
        },
        {
            href: "#/projects",
            text: "Projects",
            active: false,
        },
        {
            href: "#/skills",
            text: "Skills",
            active: false,
        },
        {
            href: "#/experiences",
            text: "Experiences",
            active: false,
        },
        {
            href: "#/about",
            text: "About",
            active: false,
        },
        {
            href: "#/resume",
            text: "Resume",
            active: false,
        },
    ];

    function onRouteChange(route) {
        route.active = true;
        NavRoutes.forEach((r) => {
            if (r !== route) {
                r.active = false;
            }
        });
        NavRoutes = [...NavRoutes]; // trigger reactivity
    }

    onMount(() => {
        onhashchange = () => {
            const currentRoute = window.location.hash;
            NavRoutes.forEach((route) => {
                route.active = route.href === currentRoute;
            });
            NavRoutes = [...NavRoutes]; // trigger reactivity
        };
    });
</script>

<div
    class="sm:flex flex-row justify-between pt-10 w-full border-b pb-3 border-gray-500 z-[99] sm:sticky top-0"
    style="background-color: #212529;"
>
    <div
        class="hidden sm:flex sm:flex-row w-max text-center"
        style="color:#718096"
    >
        {#each NavRoutes as route}
            <a
                class={`nav-link px-4 hover:bg-gray-500 text-center pt-1 pb-1.5 rounded-sm hover:text-white ${route.active ? "active-link" : ""}`}
                href={route.href}
                on:click={(e) => {
                    e.preventDefault();
                    onRouteChange(route);
                    window.location.href = route.href;
                }}>{route.text}</a
            >
        {/each}
    </div>
</div>
