<script>
    // get the text from the child component
    export let text;
    export let text_bold = "font-light";
    export let margin = "mb-8";


</script>


<p class={"text-base xl:text-lg p-0 sm:p-2 font-sans font-normal mb-8 first-letter:pl-6 sm:first-letter:pl-12 "+margin}>
    <span class={text_bold}>{text}</span>
</p>
