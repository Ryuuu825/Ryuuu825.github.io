<script>
    import "../app.css";

    import WorkExperienceEntry from "../lib/WorkExperienceEntry.svelte";

    document.title = "Ken's Portfolio - Experiences";
</script>

<div class="w-full h-min animate-fade-in flex flex-col">
    <!-- Work Experience -->
    <h1 class="text-2xl font-bold mb-5">Work Experience</h1>
    <h2 class="text-xl font-bold mb-5">Part time</h2>
    <WorkExperienceEntry
        company_icon_src="company_icons/tabnext.jpeg"
        company_name="Tab Next Limited"
        company_link="https://www.tabnext.asia"
        position="Web developer"
        date="summer 2022"
        description={[
            "Participated in developing responsive web applications for multiple healthcare projects using DotNet and VueJS",
        ]}
        tech={["Asp.Net", "VueJS", "MySQL"]}
    />

    <h2 class="text-xl font-bold mb-5">Internships</h2>
    <!-- 
        Code by hands, Intern
        https://www.codebyhands.com/ 
    -->
    <WorkExperienceEntry
        company_icon_src="company_icons/codebyhands.svg"
        company_name="Code By Hands Limited"
        company_link="https://www.codebyhands.com/"
        position="Full-stack developer Intern"
        date="summer 2022"
        description={[
            "Requirements Gathering: Collaborated with the client to understand system needs and document requirements.",
            "User Flow Design: Created intuitive user flows to enhance user experience.",
            "Component Development: Developed components for both frontend (Nextjs) and backend systems (Laravel).",
            "Team Collaboration: Worked closely with colleagues to support project goals and deliverables.",
        ]}
        tech={["Nextjs", "React", "Laravel", "MySQL", "Docker"]}
    />

    <!-- 
        Genieland, Intern
        https://www.genieland.ai/ 
    -->
    <WorkExperienceEntry
        company_icon_src="company_icons/genieland.png"
        company_name="Genieland Company Limited"
        company_link="http://www.genieland.ai/"
        position="Data Engineer Intern"
        date="summer 2022"
        description={[
            "Conducted research on the latest market information and research progress in computer vision and machine learning.",
            "Create a mobile application prototype using swiftUI to showcase computer vision applications in rehabilitation.",
        ]}
        tech={["SwiftUI", "AWS", "Computer Vision"]}
    />

    <!-- Education -->
    <h1 class="text-2xl font-bold mt-5">Education</h1>
    <div
        class="flex flex-col border rounded-md border-gray-500 p-4 sm:p-5 my-5 r"
    >
        <div class="flex flex-row justify-between items-baseline">
            <span class="text-sm sm:text-lg font-semibold">
                BEng in Computer Science
            </span>
            <span class="hidden sm:inline-block text-xs">2023 - now </span>
        </div>
        <span class="hidden sm:flex text-sm"
            >Hong Kong University of Science and Technology</span
        >
        <div class="flex flex-row sm:hidden text-xs mt-3">
            <span class="mr-3 w-[20%]">@HKUST</span>
            <span>2023 - now</span>
        </div>
        <div>
            <ul class="list-disc list-inside mb-1 text-sm mt-2 ml-2">
                <li>
                    <div
                        class="inline-block font-semibold bg-slate-500 text-white rounded-md px-1 mr-1"
                    >
                        A+
                    </div>
                    COMP2012 Object-Oriented Programming and Data Structures (C++)
                </li>
            </ul>
        </div>
    </div>

    <div
        class="flex flex-col border rounded-md border-gray-500 p-4 sm:p-5 my-5 r"
    >
        <div class="flex flex-row justify-between items-baseline">
            <span class="text-sm sm:text-lg font-semibold">
                <span class="hidden sm:inline"> Higher Diploma in </span>
                <span class="inline sm:hidden"> HD in </span>
                Software Engineering
                <span class="text-sm font-normal hidden sm:inline">
                    ( 3.91 / 4.0 )</span
                >
            </span>

            <span class="hidden sm:inline-block text-xs">2021 - 2023</span>
        </div>
        <span class="hidden sm:flex text-sm"
            >Hong Kong Institute of Vocation Education</span
        >
        <div class="flex flex-row sm:hidden text-xs mt-3">
            <span class="mr-3 w-[20%]">@IVE</span>
            <span>2021 - 2023</span>
        </div>
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: #212529;
        color: #fff;
        letter-spacing: 0.5px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
            "Segoe UI Symbol";
    }

    :global(.r:hover) {
        scale: 1.02;
    }

    :global(.r) {
        transition: all 0.2s ease-in-out;
    }
</style>
