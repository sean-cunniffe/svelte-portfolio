<script lang="ts">
    import { onMount } from "svelte/internal";
    import Navigation from "./navigation.svelte";
    import type { PageData } from "../../routes/$types";
    export let data: PageData;

    onMount(async () => {
        let background = document.getElementById(
            "home-portait",
        ) as HTMLImageElement;
        let slide = document.getElementById(
            "slide-container",
        ) as HTMLImageElement;
        document.fonts.ready.then(() => {
            if (background.complete) {
                background.style.animationPlayState = "running";
                slide.style.animationPlayState = "running";
            }
        });
        background.addEventListener("load", () => {
            document.fonts.ready.then(() => {
                background.style.animationPlayState = "running";
                slide.style.animationPlayState = "running";
            });
        });
        if (background.complete) {
            background.style.animationPlayState = "running";
            slide.style.animationPlayState = "running";
        }
    });
</script>

<div
    id="home-container"
    class="h-150-screen flex flex-col justify-center w-full overflow-hidden"
>
    <div
        id="home-content"
        class="mb-auto h-screen flex flex-col justify-center"
    >
        <div
            class="flex flex-col-reverse lg:flex-row justify-center overflow-hidden mx-auto lg:backdrop-blur-sm lg:border-opacity-20"
        >
            <div
                id="slide-container"
                class="my-auto text-center lg:text-right font-nerd font-semibold color-main overflow-hidden"
            >
                <h1
                    class="animation-slide-left anim-delay-750 text-lg lg:text-5xl ml-auto"
                >
                    <span>I'm </span><span class="color-highlight"
                        >Seán Cunniffe</span
                    >
                </h1>
                <h1
                    class="animation-slide-left anim-delay-1750 text-lg lg:text-5xl ml-auto"
                >
                    Software Engineer
                </h1>
                <h1
                    class="animation-slide-left text-xs lg:text-base anim-delay-2000 ml-autot"
                >
                    Experienced in cloud-based backend development
                </h1>
                <div class="animation-slide-left anim-delay-3000">
                    <Navigation data={data}/>
                </div>
            </div>
            <div class="flex flex-row relative mb-3 lg:mb-0 overflow-visible">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                    id="home-portait"
                    class="lg:max-w-screen-sm animation-shift-up-fade relative mix-blend-normal"
                    src="portait.png"
                />
            </div>
        </div>
    </div>
</div>

<style>
    #slide-container {
        animation-play-state: paused;
    }

    .h-150-screen {
        height: 150vh;
    }
    #home-container {
        background: url("/rain.svg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
    }

    .animation-shift-up-fade {
        animation: shift-up-fade forwards 1.5s;
        animation-play-state: paused;
    }

    .animation-slide-left {
        transform: translateX(200%);
        opacity: 0;
        animation: slide-right forwards 1.5s;
        animation-play-state: inherit;
    }

    .anim-delay-750 {
        animation-delay: 750ms;
    }

    .anim-delay-1750 {
        animation-delay: 1750ms;
    }
    .anim-delay-2000 {
        animation-delay: 2000ms;
    }
    .anim-delay-3000 {
        animation-delay: 3000ms;
    }

    @keyframes shift-up-fade {
        from {
            transform: translateY(10%);
            opacity: 0;
        }
    }

    @keyframes shift {
        from {
            transform: translateX(1%);
        }
    }

    @keyframes slide-right {
        to {
            opacity: 100%;
            transform: translateX(0);
        }
    }
</style>
