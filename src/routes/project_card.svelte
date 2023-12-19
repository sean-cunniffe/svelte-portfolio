<script lang="ts">
    import { fly } from "svelte/transition";
    import GithubButton from "./githubButton.svelte"
    export let title: string|null = null;
    export let description: string|null = null;
    export let skills: string|null = null;
    export let imageURL: string|null = null;
    export let delay = 0;
    export let link: string|null= null;
    export let visible = false;
    export let repoLink: string|null= null;
</script>

{#if visible}
    <div
        transition:fly={{
            x: 500,
            duration: 1000,
            delay: delay,
        }}
        class="w-5/6 border-2 shadow-xl flex flex-col md:flex-row m-3.5 ml-auto mr-auto p-3 pl-6 pr-6 rounded-2xl select-none"
    >
        <img
            class="mx-auto md:w-1/3 mb-auto mt-2 md:mr-3 md:ml-0 rounded-2xl"
            src={imageURL}
            alt=""
        />
        <div class="md:ml-3">
            <h3 class="font-semibold text-2xl mb-2 text-center md:text-left">
                {title}
            </h3>
            <div class="flex flex-col md:flex-row mt-2 mx-auto md:mx-0">
                <h2 class=" font-semibold mr-2 text-center md:text-left color-highlight">Tools/Skills:</h2>
                <p class="text-center md:text-left">{skills}</p>
            </div>
            <div class="flex flex-row justify-center md:justify-start">
                {#if link}
                    <a href={link} target="_blank">
                        <button
                            class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-1 px-2 rounded my-2 mx-auto md:mx-0 block"
                            >Live Demo</button
                        >
                    </a>
                {/if}
                {#if repoLink}
                    <a href={repoLink} target="_blank">
                        <GithubButton classes="h-8 my-2 ml-3"/>
                    </a>
                {/if}
                {#if !link && !repoLink}
                    <br />
                {/if}
            </div>
            <p class="text-center md:text-left">
                {description}
            </p>
        </div>
    </div>
{/if}
