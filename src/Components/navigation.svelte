<script lang="ts">
import { onMount } from "svelte";

    import { fly } from "svelte/transition";
    import { changeComponent, currentComponent } from "../Services/Stores";
    const butt = ["Home", "About", "Projects"];
    let isDisabled = false;

    onMount(()=>{
        isDisabled = true;
    })

    function nextComponent(): string{
        let index = 0;
        for(let i=0;i<butt.length;i++){
            let comp = butt[i];
            if(comp === currentComponent){
                index = i;
                break; 
            }   
        }
        if(index + 1 == butt.length){
            index = 0;
        }else{
            index += 1; 
        }
        return butt[index];
    }
    

    const scrollToNextComponent: any = async () => {
        await new Promise((resolve) => setTimeout(resolve, 750));
        
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth",
        });
    };

    let btnDelay = 500;

</script>

<div class="hidden sm:flex ml-auto mr-auto flex-row justify-center sticky top-0">
    {#each butt as but, i}
        {#if but != currentComponent}
            <button
            disabled={isDisabled}
                id={but}
                on:click={() => {
                    changeComponent(but);
                }}
                on:outrostart={scrollToNextComponent()}
                on:introend={()=> isDisabled = false}
                transition:fly={{
                    y: 200,
                    duration: 2000,
                    delay: btnDelay + 150 * i,
                }}
                class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5"
                >{but}</button
            >
        {/if}
    {/each}
</div>

<div class="sm:hidden absolute bottom-0 left-0 w-full flex justify-center pb-20">
    <button
            disabled={isDisabled}
                on:click={() => {
                    changeComponent(nextComponent());
                }}
                on:outrostart={scrollToNextComponent()}
                on:introend={()=> isDisabled = false}
                transition:fly={{
                    y: 200,
                    duration: 2000,
                    delay: btnDelay
                }}
                class="bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded"
                >{nextComponent()}</button>
</div>
