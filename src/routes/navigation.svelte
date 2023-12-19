<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    let cvLink: string = data.profile.cv;

    const butt: NavButtons[] = [
        { buttonTitle: "About", navId: "about-wrapper" },
        { buttonTitle: "Projects", navId: "projects-wrapper" },
    ];

    function changeComponent(but: NavButtons) {
        const el = document.getElementById(but.navId);
        el.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "start",
        });
    }

    let btnDelay = 500;

    interface NavButtons {
        buttonTitle: string;
        navId: string;
    }
</script>

<div
    class="hidden sm:flex ml-auto mr-auto flex-row justify-center sticky top-0"
>
    {#each butt as but, i}
        <button
            on:click={() => {
                changeComponent(but);
            }}
            class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5 underline"
            >{but.buttonTitle}</button
        >
    {/each}
    <a target="_blank" href="{cvLink}">
        <button
            on:click={() => {}}
            class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5 underline"
            >CV</button
        >
    </a>
</div>
