<script lang="ts">
    import type { PageData } from '../../routes/$types'
    import Timeline from './timeline/timeline.svelte'
    export let data: PageData

    let bio = data.profile.bio
    let timeline = data.profile.timeline
</script>

<div
    id="about-wrapper"
    class="bg-main flex flex-col xl:w-3/4 m-auto pb-20 sm:p-7 "
>
    <div
        id="parent"
        class="w-full flex flex-col justify-around md:flex-row md:p-10 p-6"
    >
        <div id="bio-paragraph" class="md:mb-auto md:py-24 mb-8 md:mx-4 md:w-1/3 md:sticky top-0">
            <h1
                class="text-center md:text-left mt-3.5 md:mt-0 text-3xl font-thin color-highlight"
            >
                Hey there! 👋 I'm Seán
            </h1>
            <br />
            {#each bio as paragraph}
                <p class="text-center md:text-left p-0.5">
                    {paragraph}
                    <br />
                </p>
            {/each}
        </div>
        <Timeline {timeline} />
    </div>
</div>

<style>
    #gmail-icon:hover > path {
        transition-property: background-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        fill: red;
    }

    #linkedin:hover > path {
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        fill: white;
    }
    #linkedin:hover {
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        background-color: #0e76a8;
    }
</style>
