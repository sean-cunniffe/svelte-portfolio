<script lang="ts">
    import { onDestroy, onMount } from "svelte/internal";
    import { fly } from "svelte/transition";
    import Message from "./message.svelte";
    import Navigation  from "./navigation.svelte"
    let visible = false;
    const fadeInDelay = 500;

    let messageMoveIntervalTime = 4;

    onDestroy(()=>{
        let message = <HTMLElement>document.querySelector("#message");
        message.style.visibility = "hidden";})

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

<div id="home-wrapper">
    <div
        id="parent"
        class="min-h-screen w-screen flex flex-col md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 relative overflow-hidden"
    >
        <div class="flex flex-row w-full">
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
                <!-- <img transition:fade src ="assets/images/profile-pic.jpg" class="h-40 lg:h-80 2xl:h-96 rounded-xl ml-auto mr-auto mb-2" alt=""> -->
                <h3
                    transition:fly={{ y: -200, duration: 2000 }}
                    class="self-center text-2xl md:text-5xl text-center"
                >
                    Hi, I'm Sean Cunniffe. <br />Welcome to my Web Portfolio
                </h3>
                <Navigation></Navigation>
                <a target="_blank"
                href="https://drive.google.com/uc?export=view&id=1Zx4OJHz992_D9ldnsdQBeBRdWUZmX5JV"
                class="text-center"
            >
                <h3 class="mt-4 md:mt-0 text-blue-600 text-xl" transition:fly={{ y: 200, duration: 2200, delay: 2000 }}>
                    Link to CV
                </h3>
            </a>
                <!-- {:else}
            <img src="assets/images/loading.svg" alt=""/> -->
            {/if}
        </div>
        <!-- Router and switch in div-->
        <div class="flex flex-row w-full">
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
    <Message />
</div>

<style>
    #home-wrapper {
        background-image: url("/assets/images/background.svg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
    }
</style>
