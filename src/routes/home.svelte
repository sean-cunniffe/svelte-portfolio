<script lang="ts">
    import { onMount } from "svelte/internal";
    import { fly } from "svelte/transition";
    import Navigation from "./navigation.svelte";
    import type { PageData } from "./$types";
    let visible = false;
    const fadeInDelay = 500;
    export let data: PageData;
    console.log(data);
    let greeting: string[] = data.greeting;
    let cvLink: string = data.profile.cv;

    onMount(async () => {
        setTimeout(() => {
            visible = true;
        }, fadeInDelay);
    });
</script>

<div id="home-wrapper" class="select-none">
    <div
        id="parent"
        class="min-h-screen w-screen flex flex-col md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 relative overflow-hidden"
    >
        <div class="mb-auto mt-auto">
            {#if visible}
                <h3
                    transition:fly={{ y: 200, duration: 2000 }}
                    class="self-center text-2xl md:text-5xl text-center"
                >
                    {#each greeting as greeting}
                        {greeting}
                        <br />
                    {/each}
                </h3>
            {/if}
            <div class="terminal mx-auto mt-5 max-w-3xl pb-32">
                <div class="title-bar">
                    <span class="close-button bg-red-500" />
                    <span class="minimize-button bg-yellow-500" />
                    <span class="maximize-button bg-green-500" />
                </div>
                <div class="terminal-body">
                    <p>
                        <span class="command-line"
                            >It all starts at the terminal...</span
                        >
                    </p>
                    <p>
                        <span class="command-line">Select an option:</span>
                    </p>
                    <p class="selectable">
                        <span class="command-line">1) About</span>
                    </p>
                    <p class="selectable">
                        <span class="command-line">2) Projects</span>
                    </p>
                    <p class="selectable">
                        <span class="command-line">3) Contact</span>
                    </p>
                    <p><span class="command-line"><span class="cursor"></span></span></p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    #home-wrapper {
        background: rgb(40, 38, 41);
        background: linear-gradient(
            90deg,
            rgba(40, 38, 41, 1) 36%,
            rgba(119, 65, 103, 1) 36%
        );
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
    }
    #home-wrapper::after {
        background-color: hsl(316, 30%, 36%);
        width: 68%;
    }

    .command-line::before {
        font-family: "Nerd";
        content: "sean@Seans-Desktop:~$";
        color: #ffa500; /* Orange color for the dollar sign */
        margin-right: 5px;
    }
    .terminal {
        background-color: #333;
        border: 2px solid #d3d3d3;
        border-radius: 5px;
        overflow: hidden;
    }

    .title-bar {
        background-color: #d3d3d3;
        display: flex;
        align-items: center;
        padding: 5px;
    }

    .close-button,
    .minimize-button,
    .maximize-button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 3px;
        margin-left: 3px;
    }

    .terminal-body {
        padding: 10px;
    }

    .terminal-body > p {
        font-family: "Nerd";
        margin: 2px;
        line-height: 1.4;
        color: aliceblue;
    }
    .selectable:hover {
        color: lightgreen;
    }

    .cursor {
        display: inline-block;
        width: 1px;
        height: 1rem;
        background-color: aliceblue; /* Green color for the cursor */
        animation: cursorAnimation 2s infinite; /* Flashing animation */
    }

    @keyframes cursorAnimation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
