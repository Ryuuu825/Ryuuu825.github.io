<script>
    import "../app.css";
    import Paragraph from "../lib/Paragraph.svelte";

    document.title = "Ken's Portfolio - About";
</script>

<div class="w-full h-min animate-fade-in">
    <div class="flex flex-col sm:flex-row">
        <div
            class="py-5 sm:py-12"
        >
            <div class="rounded-xl overflow-hidden mb-12">
                <img src="/ken.png" alt="" class="overflow-hidden w-full h-[10rem] sm:h-[15rem] object-cover ">
            </div>

            <h1 class="text-2xl mb-3 font-semibold font-serif ">My Passion</h1>
            <Paragraph text="Ofc. I love building software." margin="mb-4" />
            <Paragraph
                text="In my free time, I like to read tutorials and books 
                about operating systems, compilers, and programming 
                languages."
                margin="mb-4"
            />

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

            <Paragraph
                text="That doesn't mean that I don't like Backend and Frontend. In fact, I like building 
                web applications and mobile applications. I'm also interested in building
                server-side APIs."
                margin="mb-4"
            />

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
                I interned at Genieland Ltd. in the summer of 2022, a local IT company that provides expert AI 
                solutions for human-centered health activities. I wrote an IOS application to showcase our concept 
                of assisting visually-blinded individuals. Thus, I am amazed about how technology and computers 
                can benefit minorities in social situations. Furthermore, it reinforced my desire to be a software 
                developer. University is an important pivot where many experts congregate and improve. I want to 
                major in computer science at university to enhance my career development in the IT field and acquire 
                new abilities."
            />

            <div class="hidden sm:block text-gray-400 pt-4">
                479 words, last updated on 2023-01-22
            </div>

            <h1 class="text-2xl mb-3 font-semibold font-serif mt-12">Fav. song</h1>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1OkAWnUN7nQkWAUsGRW7Xw?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            

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
