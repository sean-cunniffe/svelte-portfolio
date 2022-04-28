<script lang="ts">
import type { Subject } from "rxjs";

    import { onDestroy, onMount } from "svelte/internal";
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
    let messageMoveIntervalTime = 4;

    onDestroy(() => {
        let message = <HTMLElement>document.querySelector("#message");
        message.style.visibility = "hidden";
    });

    onMount(async () => {        
        let message = <HTMLElement>document.querySelector("#message");
        message.style.visibility = "hidden";
        setTimeout(() => {
            visible = true;
        }, fadeInDelay);

        // wait for components the message is moving to, to load properly, running straight away will
        // cause the message to think it reached the first component as they'll both be position 0,0

        await new Promise((resolve) => setTimeout(resolve, 1500));

        await moveTo("computer").then(
            () => (message.style.visibility = "visible")
        );
        await moveTo("router");
        await moveTo("switch");
        await moveTo("server");
        await moveTo("switch");
        await moveTo("router");
        await moveTo("computer").then(() => {
            // set message to hidden and display hello world on pc
            message.style.visibility = "hidden";
            let computer = (<any>(
                document.querySelector("#computer")
            )).getSVGDocument();
            computer.getElementById("hello-world").style.visibility = "visible";
        });
    });

    // returns true when location reached
    function moveMessage(x: number, y: number): boolean {
        const speed = 6;
        let message = <HTMLElement>document.querySelector("#message");
        let unit = "px";
        let messageX = +message.style.left.replace(unit, "");
        let messageY = +message.style.top.replace(unit, "");
        if (messageX < x - speed) {
            message.style.left = messageX + speed + unit;
        } else if (messageX > x + speed) {
            message.style.left = messageX - speed + unit;
        } else if (messageY >= y - speed && messageY <= y + speed) return true;

        if (messageY < y - speed) {
            message.style.top = messageY + speed + unit;
        } else if (messageY > y + speed) {
            message.style.top = messageY - speed + unit;
        } else if (messageX >= x - speed && messageX <= x + speed) return true;
        return false;
    }

    function getXY(location: string): { x: number; y: number } {
        let component = (<HTMLElement>(
            document.querySelector("#" + location)
        )).getBoundingClientRect();
        return {
            x: Math.round(component.left),
            y: Math.round(component.top),
        };
    }

    // calls moveMessage to the component with id as location,
    // returns a promise, resolves the promise when reached location
    function moveTo(location: string): Promise<boolean> {
        return new Promise((resolve) => {
            let id = setInterval(() => {
                let component = getXY(location);
                if (
                    moveMessage(
                        Math.round(component.x),
                        Math.round(component.y)
                    )
                ) {
                    clearInterval(id);
                    resolve(true);
                }
            }, messageMoveIntervalTime);
        });
    }
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
                    <!-- Hi, I'm Sean Cunniffe. <br />Welcome to my Web Portfolio -->
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
                <!-- {:else}
            <img src="assets/images/loading.svg" alt=""/> -->
            {/if}
        </div>
        <!-- Router and switch in div-->
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
    <div class="w-1/6 lg:w-1/12 absolute" id="message">
        <svg
            id="message"
            class="relative w-1/2"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"
            /><path
                d="M154.661 192.852L52.373 91.452l101.814-.161a78521.3 78521.3 0 01203.707 0l101.895.16-101.42 101.4-101.42 101.401zM410.263 327.356l-71.356-71.358 71.516-71.513 71.515-71.514v142.872c0 78.58-.071 142.871-.16 142.871-.087 0-32.269-32.11-71.515-71.358z"
                id="path1"
                fill="#9fdcff"
                fill-rule="evenodd"
            /><path
                d="M123.882 348.88l71.984-71.984 25.795 25.72c16.74 16.692 26.73 26.187 28.46 27.05 3.655 1.825 9.992 1.828 13.657.006 1.736-.863 11.485-10.123 27.982-26.58l25.317-25.256 71.512 71.515 71.513 71.514H51.897zM30.062 256.104V113.179l2.373 1.95c1.305 1.072 33.646 33.064 71.868 71.093l69.495 69.145-71.868 71.831-71.868 71.83z"
                id="path2"
                fill="#9fdcff"
                fill-rule="evenodd"
            /></svg
        >
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
