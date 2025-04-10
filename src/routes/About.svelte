<script>
    import "../app.css";
    import Paragraph from "../lib/Paragraph.svelte";

    document.title = "Ken's Portfolio - About";
</script>

<div class="w-full h-min animate-fade-in">
    <div class="flex flex-col sm:flex-row">
        <div class="py-5 sm:py-12">
            <div class="rounded-xl overflow-hidden mb-12">
                <img
                    src="/ken.png"
                    alt=""
                    class="overflow-hidden w-full h-[10rem] sm:h-[15rem] object-cover"
                    draggable="false"
                />
            </div>

            <div
                class="hidden sm:block mb-8 w-full rounded-md p-3 px-6 border border-gray-500 text-sm xl:text-base"
                style="background-color: #454b4e;"
            >
                Currently reading, (and pretty recommend it !)
                <br />
                👉
                <a
                    class="underline"
                    href="https://www.amazon.com/dp/013409266X"
                    target="_blank"
                    rel="noreferrer"
                    >computer systems a programmer's perspective</a
                >
            </div>

            <h1 class="text-2xl mb-3 font-semibold font-serif mt-12">Bio</h1>
            <Paragraph
                text="Since the purchase of my first computer, I've always been
                enthusiastic about how it works. I began learning C++ and Python as
                a self-learner after DSE to obtain a deeper grasp of computer
                knowledge. Henceforth, I discovered that computer science is an
                attractive topic. Cliché as it might seem, I cannot hold myself back
                from my desire for knowledge. I've spent hours and hours watching
                YouTube tutorial videos, browsing GitHub repositories, and reading
                books. Computer science is a topic that captures my attention, and I
                can never relinquish it."
            />
            <Paragraph
                text="During my life, I suffered from family issues and political 
                unrest as well as the pandemic throughout my high school years. Feeling
                disoriented, I have lost track of myself, and my interest in learning. 
                Fortunately, with the help of career counselling at school and reading 
                books, my perspective on schooling has altered. I spent many hours on 
                revision, homework, and intensive courses in my last year of secondary 
                school. My secondary school teacher had written a commendation letter and 
                invited me to give a speech to the juniors. Moments like these encouraged 
                me to keep going and not give in."
            />

            <Paragraph
                text="I've been motivated since I have been studying software engineering 
                at the Hong Kong Institute of Vocational Education (IVE) and expanded my 
                social network there. I have learnt a lot from my peer's life experiences. 
                In addition to my attitude toward studying, the sight of my own future has 
                also expanded. Their experiences kept reminding me to focus on my goals and 
                do whatever it takes to achieve them."
            />

            <Paragraph
                text="There were numerous group projects during my study in IVE, and I was often nominated 
                as the group leader. I was able to hone my leadership and collaboration skills because 
                of this experience. Besides, I enjoy taking on new challenges and learning new technologies 
                through projects, therefore I always expect the best out of myself and my team. I usually 
                write extra functions that most people think are unrealistic or unnecessary for getting 
                an A only. Despite the difficulties, we received positive feedback from the teacher and 
                peers. These projects had taught me a variety of technologies and skills, including .Net 
                backend, React, and git. Enlarging the skill set makes me feel pretty wonderful."
            />

            <Paragraph
                text="
                In the summer of 2022, I had the opportunity to intern at Genieland Ltd., a local IT firm specializing 
                in AI solutions for human-centered health activities. During this time, I developed an iOS application 
                aimed at assisting visually impaired individuals, an experience that not only highlighted the potential 
                of technology in aiding marginalized communities, but also solidified my aspiration to become a software 
                developer."
            />

            <Paragraph
                text="
                Now, as a university student, I am eager to delve deeper into the world of computer science. I am excited 
                to broaden my understanding, learn new programming languages, and explore emerging technologies. I look forward 
                to collaborating with like-minded peers and faculty at HKUST, and applying the knowledge gained in real-world 
                scenarios. I am confident that this journey will equip me with the necessary skills and experience to contribute 
                meaningfully to the IT sector in the future.
                "
            />

            <div class="hidden sm:block text-gray-400 pt-4">
                513 words, last updated on 2024-06-06
            </div>
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
</style>
