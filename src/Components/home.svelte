<script lang="ts">
import type { Subject } from "rxjs";

    import { onMount } from "svelte/internal";
    import { fly } from "svelte/transition";
    import Navigation from "./navigation.svelte";
    let visible = false;
    const fadeInDelay = 500;
    export let data: Subject<any>;
    let greeting : string[]= []
    let cvLink : string = "";

    data.subscribe(value=>{
        greeting = value.greeting;
        cvLink = value.profile.cv;
    });

    onMount(async () => {        
        setTimeout(() => {
            visible = true;
        }, fadeInDelay);
    })
</script>

<div id="home-wrapper" class="select-none">
    <div
        id="parent"
        class="min-h-screen w-screen flex flex-col md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 relative overflow-hidden"
    >
        <div class="p-10 flex flex-row w-full">
            <embed
                id="computer"
                class="mr-auto w-1/6 lg:w-1/12 h-full"
                type="image/svg+xml"
                src="assets/images/computer.svg"
                alt=""
            />

            <img
                id="server"
                src="assets/images/server.svg"
                class="ml-auto w-1/6 lg:w-1/12"
                alt=""
            />
        </div>
        <div class="mb-auto mt-auto">
            {#if visible}
                <h3
                    transition:fly={{ y: -200, duration: 2000 }}
                    class="self-center text-2xl md:text-5xl text-center"
                >
                {#each greeting as greeting}
                    {greeting}
                    <br>
                {/each}
                </h3>
                <Navigation />
                <a
                    target="_blank"
                    href="{cvLink}"
                    class="text-center"
                >
                    <h3
                        class="mt-4 md:mt-0 text-blue-600 text-xl"
                        transition:fly={{ y: 200, duration: 2200, delay: 2000 }}
                    >
                        Link to CV
                    </h3>
                </a>
            {/if}
        </div>
        <div class="p-10 flex flex-row w-full">
            <img
                id="router"
                src="assets/images/router.svg"
                class="mr-auto w-1/6 lg:w-1/12"
                alt=""
            />
            <img
                id="switch"
                src="assets/images/switch.svg"
                class="ml-auto w-1/6 lg:w-1/12"
                alt=""
            />
        </div>
    </div>
</div>

<style>

    #home-wrapper {
        background-image: url("/assets/images/background.svg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
    }
</style>
