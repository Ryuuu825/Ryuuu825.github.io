<script>
    import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

    import DrapDropList from "../lib/DrapDropList.svelte";

    let langs = [
        { id: 1, text: "Java" },
        { id: 2, text: "Rust" },
        { id: 3, text: "C++" },
        { id: 4, text: "Python" },
        { id: 5, text: "JavaScript" },
        { id: 6, text: "PHP" },
        { id: 7, text: "Swift" },
        { id: 8, text: "C#" },
        { id: 9, text: "Assembly" },
        { id: 10, text: "Typescript" },
        { id: 11, text: "C" },
    ];

    document.title = "Ken's Portfolio - Skills";
</script>

<div class="w-full h-min animate-fade-in">
    <!-- Programming Lang -->
    <div class="flex flex-col sm:flex-row lg:flex-row w-full">
        <div class="lg:w-1/4 xs:w-full  ">
            <h2 class="text-2xl font-bold my-5">
                Programming Languages
            </h2>

            <span class="text-sm text-gray-300 font-light ">
                It is easy to learn new programming languages after truly
                understanding the fundamentals of programming.
            </span>

            
        </div>
        <div class="w-[85vw] sm:w-3/4 flex flex-col ">
            <DrapDropList bind:data={langs} />
            <p class="hidden sm:block text-sm text-gray-400 font-light ml-7">
                * Try to drag and drop 
            </p>
        </div>

    </div>


    <!-- Lib, Framework -->
    <h2 class="text-xl xl:text-2xl font-bold mb-3 mt-16">Library, Framework</h2>
    <div
        class="text-sm sm:text-base w-full flex flex-col sm:flex-row flex-wrap sm:ml-5 select-none justify-start items-baseline"
    >
        <div class="my-3 sm:mx-5">
            <span class="text-sm text-gray-300 font-light "
                >Frontend / Backend</span
            >
            <ul
                class="flex flex-row flex-wrap justify-start items-center align-middle my-3 "
            >
                <li class="w-24 text-center mt-auto ">
                    <svg
                        class="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] my-1 sm:my-2 mx-auto hover:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 103 124"
                    >
                        <path
                            class="fill-current"
                            d="M96.33,20.61C85.38,4.93,63.74.28,48.09,10.25L20.61,27.77A31.46,31.46,0,0,0,6.37,48.88,33.22,33.22,0,0,0,9.64,70.2,31.52,31.52,0,0,0,4.93,82a33.61,33.61,0,0,0,5.73,25.41c11,15.68,32.6,20.33,48.25,10.36l27.48-17.52a31.48,31.48,0,0,0,14.24-21.11A33.22,33.22,0,0,0,97.36,57.8,31.52,31.52,0,0,0,102.07,46a33.57,33.57,0,0,0-5.74-25.41"
                        />
                        <path
                            style="fill:#212529"
                            d="M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45"
                        />
                    </svg>
                    <p class="">svelte</p>
                </li>
                <li class="w-24 text-center mt-auto flex flex-col justify-center items-center">
                    <i class="sm:w-[3rem] sm:h-[3rem] sm:my-2 scale-75 sm:scale-100 hover:text-gray-400 fab fa-3x fa-react" />
                    <p class="">reactjs</p>
                </li>
                <li class="w-24 text-center mt-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xml:space="preserve"
                        class="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] my-1 sm:my-2 mx-auto hover:text-gray-400 fill-current"
                    >
                        <g>
                            <path
                                d="M380,480c-1.9,1-1.7,1.3,0.1,0.4l1.5-1C381.6,479.1,381.6,479.1,380,480z M383.8,477.9l0.2,0.3l1.1-0.8L383.8,477.9z
                M386.3,476.4l0.2,0.3l1.1-0.8L386.3,476.4z M388.8,474.9l0.1,0.2l1.1-0.8L388.8,474.9z M392.2,472.7c-1.7,1.2-2.4,1.9-0.8,1.1
                l2.6-2.1L392.2,472.7L392.2,472.7z M239.2,0.1c-1.2,0.1-4.7,0.4-7.7,0.7c-72.8,6.6-140.8,45.8-184,106.1
                C23.6,139.9,8.2,178.4,2.3,218.7C0.3,232.8,0,236.9,0,256c0,19.1,0.3,23.2,2.3,37.2c13.9,96.2,82.3,176.9,175.1,206.8
                c16.7,5.3,34.2,9,54.1,11.3c7.7,0.8,41.2,0.8,49,0c34.4-3.8,63.5-12.3,92.3-27c4.4-2.2,5.2-2.8,4.7-3.3
                c-14.1-18.6-27.9-37.2-41.7-55.9l-40.9-55.2l-51.2-75.9c-17.1-25.4-34.2-50.7-51.7-75.9c-0.2,0-0.4,33.7-0.5,74.9
                c-0.2,72.1-0.2,75-1.1,76.7c-0.9,2-2.4,3.7-4.4,4.6c-1.6,0.7-3,0.9-10.6,0.9h-8.7l-2.3-1.4c-1.4-0.9-2.6-2.2-3.3-3.7l-1.1-2.3
                l0.1-100.3l0.2-100.3l1.6-2l3.7-3c2.1-1,2.9-1.2,11.6-1.2c10.2,0,11.8,0.4,14.5,3.3c20.7,30.9,41.4,61.9,61.7,93
                c33.3,50.4,78.7,119.2,101,153l40.6,61.4l2-1.3c19.5-13,37.2-28.5,52.6-46.2c32.3-36.9,53.2-82.3,60.3-130.8
                c2.1-14.1,2.3-18.2,2.3-37.3c0-19.1-0.3-23.2-2.3-37.2C495.7,122.6,427.3,41.9,334.6,12c-17.3-5.5-35.2-9.2-53.2-11.1
                C276.5,0.3,243.4-0.3,239.2,0.1L239.2,0.1z M344,155c2.4,1.1,4.2,3.3,5.1,5.8c0.4,1.3,0.5,29.2,0.4,91.8l-0.2,90l-15.8-24.3
                l-15.9-24.3v-65.3c0-42.4,0.2-66.1,0.4-67.3c0.7-2.7,2.6-4.9,5-6.3c2-1,2.7-1.1,10.7-1.1C341.1,153.9,342.3,154,344,155L344,155z"
                            />
                        </g>
                    </svg>
                    <p>Nextjs</p>
                </li>
                <li class="w-24 text-center mt-auto r">
                    <i class="sm:w-[3rem] sm:h-[3rem] sm:my-2 sm:mr-4 scale-75 sm:scale-100 hover:text-gray-400 fab fa-3x fa-node" />
                    <p>nodejs</p>
                </li>
                <li class="w-24 text-center mt-auto">
                    <svg
                        class="hover:text-gray-400 w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] my-1 sm:my-2 mx-auto fill-current"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000"
                        xml:space="preserve"
                    >
                        <g
                            ><g id="_x35_151e0c8492e5103c096af88a51e96d3"
                                ><path
                                    d="M38,627.8c-7.8,0-14.4,2.8-19.8,8.4c-5.4,5.6-8.1,12.4-8.1,20.3c0,7.8,2.7,14.5,8.1,20.2c5.4,5.7,12,8.5,19.8,8.5c8,0,14.8-2.9,20.4-8.5c5.6-5.7,8.4-12.4,8.4-20.2c0-7.8-2.8-14.6-8.4-20.2C52.7,630.6,45.9,627.8,38,627.8z M380.2,571.6c0,25.3,0.9,43.2,2.6,53.6h-1c-2.5-4.9-7.5-13-14.8-24.4L184.4,314.7h-55.5v364.7h42.7V415.9c0-25.6-0.7-42.3-2-50.1h1.5c3.2,8.3,7,15.9,11.4,22.9l188.2,290.7h51.9V314.7h-42.5V571.6z M546.2,513.3H678v-38.7H546.2V353.4h142.2v-38.7H503.5v364.7h193.3v-38.7H546.2V513.3L546.2,513.3z M736.9,353.4h105.3v326.1h42.7V353.4H990v-38.7H736.9V353.4z"
                                /></g
                            ></g
                        >
                    </svg>
                    <p>Dotnet</p>
                </li>
            </ul>
        </div>
        <div class="my-3 sm:mx-5 h-full">
            <span class="text-gray-300 text-sm">UI/UX</span>
            <ul
                class="flex flex-row flex-wrap justify-start items-center align-middle my-3"
            >
                <li class="w-24 text-center mt-auto mx-3">
                    <i
                        class="sm:w-[3rem] sm:h-[3rem] sm:my-2 mr-1 sm:mr-3 scale-75 sm:scale-[90%] hover:text-gray-400 fab fa-3x fa-bootstrap"
                    />
                    <p>Bootstrap</p>
                </li>
                <li class="w-24 text-center mt-auto mx-3">
                    <svg
                        class="hover:text-gray-400 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] my-1 sm:my-2 mx-auto fill-current"
                        viewBox="0 0 256 154"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid"
                    >
                        <g>
                            <path
                                d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                            />
                        </g>
                    </svg>
                    <p>TailwindCSS</p>
                </li>
            </ul>
        </div>
        <div class="my-3 sm:mx-5">
            <span class="text-gray-300 text-sm">Database</span>

            <ul class="flex flex-row flex-wrap my-3">
                <li class="w-24 text-center mt-auto sm:mx-3">
                    <i class="sm:w-[3rem] sm:h-[3rem] sm:my-2 scale-[70%] sm:scale-[90%] hover:text-gray-400 fas fa-3x fa-fire" />
                    <p>firebase</p>
                </li>
            </ul>
        </div>
        <div class="my-3 sm:mx-5">
            <span class="text-gray-300 text-sm">Native App</span>
            <ul
                class="flex flex-row flex-wrap justify-start items-center align-middle my-3"
            >
                <li class="w-24 text-center mt-auto sm:mx-3">
                    <i class="sm:w-[3rem] sm:h-[3rem] sm:my-2 scale-[70%] sm:scale-100 hover:text-gray-400 fab fa-3x fa-android" />
                    <p>Flutter</p>
                </li>
                <li class="w-24 text-center mt-auto sm:mx-3">
                    <i class="sm:w-[3rem] sm:h-[3rem] sm:my-2 scale-[70%] sm:scale-100 hover:text-gray-400 fab fa-3x fa-apple" />
                    <p>SwiftUI</p>
                </li>
            </ul>
        </div>
        <div class="my-3 sm:mx-5">
            <span class="text-gray-300 text-sm">DevOps</span>
            <ul
                class="flex flex-row flex-wrap justify-start items-center align-middle my-3"
            >
                <li class="w-24 text-center mt-auto xm:mx-3">
                    <i class="sm:w-[3rem] sm:h-[3rem] sm:my-2 scale-[70%] sm:scale-100 hover:text-gray-400 fab fa-3x fa-docker" />
                    <p>docker</p>
                </li>
            </ul>
        </div>
    </div>
    
</div>
