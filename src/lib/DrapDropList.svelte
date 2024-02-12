<script>
    
    export let data = [];

    let ghost;
    let grabbed;

    let lastTarget;

    let mouseY = 0; // pointer y coordinate within client
    let offsetY = 0; // y distance from top of grabbed element to pointer
    let layerY = 0; // distance from top of list to top of client

    let mouseX = 0; // pointer x coordinate within client
    let offsetX = 0; // x distance from left of grabbed element to pointer
    let layerX = 0; // distance from left of list to left of client

    function grab(clientY, clientX, element) {
        // disable for mobile
        if (window.innerWidth < 768) {
            // normal nav
            return;
        }

        // modify grabbed element
        grabbed = element;
        grabbed.dataset.grabY = clientY;
        grabbed.dataset.grabX = clientX;

        // modify ghost element (which is actually dragged)
        ghost.innerHTML = grabbed.innerHTML;

        // record offset from cursor to top of element
        // (used for positioning ghost)
        offsetY = grabbed.getBoundingClientRect().y - clientY;
        offsetX = grabbed.getBoundingClientRect().x - clientX;
        drag(clientY,clientX);
    }

    // drag handler updates cursor position
    function drag(clientY, clientX) {
        if (grabbed) {
            mouseY = clientY;
            layerY = ghost.parentNode.getBoundingClientRect().y;
            mouseX = clientX;
            layerX = ghost.parentNode.getBoundingClientRect().x;
        }
    }

    // touchEnter handler emulates the mouseenter event for touch input
    // (more or less)
    function touchEnter(ev) {       
        drag(ev.clientY, ev.clientX);
        // trigger dragEnter the first time the cursor moves over a list item
        // let target = document.elementFromPoint(ev.clientX, ev.clientY).closest(".item");
        // if (target && target != lastTarget) {
        //     lastTarget = target;
        //     dragEnter(ev, target);
        // }
    }

    function dragEnter(ev, target) {
        // swap items in data
        if (grabbed && target != grabbed && target.classList.contains("item")) {
            moveDatum(parseInt(grabbed.dataset.index), parseInt(target.dataset.index));
        }
    }

    // does the actual moving of items in data
    function moveDatum(from, to) {
        let temp = data[from];
        data = [...data.slice(0, from), ...data.slice(from + 1)];
        data = [...data.slice(0, to), temp, ...data.slice(to)];
    }

    function release(ev) {
        grabbed = null;
    }

</script>

<style>
    main {
        position: relative;
    }

    .list {
        cursor: grab;
        z-index: 5;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .item {
        box-sizing: border-box;
        display: inline-flex;
        min-height: 3em;
        background-color: #212529;
        border: 1px solid #525252;
        border-radius: 2px;
        user-select: none;
        padding: 0.5rem 1rem;
        margin: 0.75rem 1rem ;
        border-radius: 10px;
    }

    .item:hover {
        padding-left: 14px;
        scale: 1.05;
        box-shadow: 
            /* Raindow color shadow in one line */
            -3px -2px 25px 3px red, 
            3px 2px 25px 3px blue,
            -3px 2px 25px 3px green;
    }

    .item:not(#grabbed):not(#ghost) {
        z-index: 10;
    }

    .item > * {
        margin: auto;
    }

    #grabbed {
        opacity: 0.0;
    }

    #ghost {
        pointer-events: none;
        z-index: -5;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.0;
    }

    #ghost * {
        pointer-events: none;
    }

    #ghost.haunting {
        z-index: 20;
        opacity: 1.0;
        box-shadow: 
            /* Raindow color shadow in one line */
            -2px -2px 25px 2px red, 
            2px 2px 25px 2px blue,
            -2px 2px 25px 2px green;
    }
</style>
<main class="dragdroplist w-full sm:ml-5 my-4">
    <div 
        bind:this={ghost}
        id="ghost"
        class={grabbed ? "hidden sm:block item  haunting" : "hidden sm:block item" + " "}
        style={"top: " + (mouseY + offsetY - layerY) + "px; left: " + (mouseX + offsetX - layerX) + "px;"}
        ><p></p></div>
    <div 
        class="w-full list "
        on:mousemove={function(ev) {ev.stopPropagation(); drag(ev.clientY , ev.clientX);}}
        on:touchmove={function(ev) {ev.stopPropagation(); drag(ev.touches[0].clientY,ev.touches[0].clientX);}}
        on:mouseup={function(ev) {ev.stopPropagation(); release(ev);}}
        on:touchend={function(ev) {ev.stopPropagation(); release(ev.touches[0]);}}>
        {#each data as datum, i (datum.id ? datum.id : JSON.stringify(datum))}
            <div 
                id={(grabbed && (datum.id ? datum.id : JSON.stringify(datum)) == grabbed.dataset.id) ? "grabbed" : ""}
                class="item"
                data-index={i}
                data-id={(datum.id ? datum.id : JSON.stringify(datum))}
                data-grabY="0"
                on:mousedown={function(ev) {grab(ev.clientY,ev.clientX, this);}}
                on:touchstart={function(ev) {grab(ev.touches[0].clientY,ev.touches[0].clientX, this);}}
                on:mouseenter={function(ev) {ev.stopPropagation(); dragEnter(ev, ev.target);}}
                on:touchmove={function(ev) {ev.stopPropagation(); ev.preventDefault(); touchEnter(ev.touches[0]);}}
                >
                <div class="content">
                    {#if datum.html}
                        {@html datum.html}
                    {:else if datum.text}
                        <p>{datum.text}</p>
                    {:else}
                        <p>{datum}</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</main>