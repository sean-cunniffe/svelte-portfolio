<script lang="ts">
    import { onMount } from "svelte";

    import { fly } from "svelte/transition";
    export let title = null;
    export let description = null;
    export let skills = null;
    export let imageURL = null;
    export let delay = 0;
    export let link = null;
    let visible = false;

    onMount(() => {
        setTimeout(() => {
            visible = true;
        }, 1000);
    });
</script>

{#if visible}
    <div
        transition:fly={{
            x: 500,
            duration: 1000,
            delay: delay,
        }}
        class="w-5/6 border-2 shadow-xl flex flex-col md:flex-row m-3.5 ml-auto mr-auto p-3 pl-6 pr-6 rounded-2xl"
    >
        <img class="mx-auto md:w-1/3 mb-auto mt-2 md:mr-3 md:ml-0 rounded-2xl" src={imageURL} alt="" />
        <div class="ml-3">
            <h3 class="font-semibold text-2xl mb-2 text-center md:text-left">{title}</h3>
            <div class="flex flex-row mt-2 mx-auto md:mx-0">
                <h2 class=" font-semibold mr-2">Tools/Skills:</h2>
                <p>{skills}</p>
            </div>
            {#if link}
            <a href={link} target="_blank">
                <button class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-1 px-2 rounded my-2 mx-auto md:mx-0 block">Live Demo</button>
            </a>
            {:else}
                <br>
            {/if}
            <p class="text-center md:text-left">
                {description}
            </p>
        </div>
    </div>
{/if}
