<script lang="ts">
    import { onMount } from "svelte";

    import { fly } from "svelte/transition";
    const butt: NavButtons[] = [
        { buttonTitle: "About", navId: "about-wrapper" },
        { buttonTitle: "Projects", navId: "projects-wrapper" },
    ];
    let isDisabled = false;

    onMount(() => {
        isDisabled = true;
    });

    function changeComponent(but: NavButtons) {
        const el = document.getElementById(but.navId);
        el.scrollIntoView({behavior:"smooth", inline:"start", block:"start"})
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
            disabled={isDisabled}
            on:click={() => {
                changeComponent(but);
            }}
            on:introend={() => (isDisabled = false)}
            transition:fly={{
                y: 200,
                duration: 2000,
                delay: btnDelay + 150 * i,
            }}
            class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5"
            >{but.buttonTitle}</button
        >
    {/each}
</div>
