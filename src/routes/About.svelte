<script lang="ts">

    import { fly } from "svelte/transition";
    import GithubButton from "./githubButton.svelte"
    import type { PageData } from "./$types";
    import { onMount } from "svelte";
    export let visible = false;
    export let data: PageData;

    let education = data.profile.education
    let workExperience = data.profile.workExperience
    let bio = data.profile.bio;
    let profilePic = data.profile.profilePic
    let linkedin = data.profile.linkedin
    let github = data.profile.github
    let email = data.profile.email

    // onMount(()=>{
    //     let pp = (<HTMLImageElement>document.getElementById("profilePic"));
    //     if(pp)
    //         pp.src = data.profile.profilePic;
    // })
</script>

<div id="about-wrapper" class="select-none"
>
    <div
        class="min-h-screen flex flex-col justify-center mb-8 md:mb-0 md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 bg-main overflow-x-hidden"
    >
    
        <div class="flex flex-col md:flex-row w-full m-auto justify-center">
            {#if visible}
                <div class="w-3/4 max-w-xl md:w-3/5 2xl:w-2/5 mx-auto md:mx-0">
                    <img id="profilePic"
                        transition:fly={{
                            x: -1000,
                            duration: 2000,
                        }}
                        src="{profilePic}"
                        class="w-full m-auto md:m-0 bg-cover border-gray-300 border-4"
                        alt=""
                    />
                    <div
                        class="mx-auto w-max mt-4 flex flex-row"
                        transition:fly={{
                            x: -1000,
                            duration: 2000
                        }}
                    >
                        <a
                            href="{linkedin}"
                            target="_blank"
                        >
                            <svg
                                id="linkedin"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin"
                                class="svg-inline--fa fa-linkedin fa-w-14 h-10 cursor-pointer"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 448"
                                ><path
                                    fill="#0e76a8"
                                    d="M416 0L28.736-13.923c-17.589-.633-44.39-1.113-43.925 45.59l3.797 382.134c.79 79.523 22.528 38.485 40.128 38.63l386.631 3.164c17.6.144 53.798 9.547 53.518-8.251L461.923 5.086C461.643-12.712 433.59.632 416 0zM135.4 384H69V170.2h66.5V384zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 64 102.2 64c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V280c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V384h-66.4V170.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z"
                                /></svg
                            >
                        </a>
                        <a
                            class="my-auto block ml-8"
                            href="mailto: {email}"
                            target="_blank"
                        >
                            <svg
                                class="h-9 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="52 42 88 66"
                                id="gmail-icon"
                            >
                                <path
                                    fill="#4285f4"
                                    d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                                />
                                <path
                                    fill="#34a853"
                                    d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                                />
                                <path
                                    fill="#fbbc04"
                                    d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                                />
                                <path
                                    fill="#ea4335"
                                    d="M72 74V48l24 18 24-18v26L96 92"
                                />
                                <path
                                    fill="#c5221f"
                                    d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                                />
                            </svg>
                        </a>
                        <a
                            class="my-auto block ml-8"
                            href="{github}"
                            target="_blank"
                        >
                            <GithubButton classes="h-10"/>
                        </a>
                    </div>
                </div>
                <div
                    class="m-auto md:mx-4"
                    transition:fly={{
                        x: 1000,
                        duration: 2000,
                    }}
                >
                    <h1
                        class="text-center md:text-left mt-3.5 md:mt-0 text-3xl font-thin color-highlight"
                    >
                        Hi, Im Sean
                    </h1>
                    <br />
                    <p class="text-center md:text-left">
                        {#each bio as paragraph }
                            {paragraph}
                            <br/>
                        {/each}
                    </p>
                    <div class="grid grid-cols-2" transition:fly={{
                        x: 1000,
                        duration: 2000,
                    }}>
                        <h2 class="font-bold mt-4 color-highlight">Education</h2>
                        <h2 class="font-bold mt-4 text-center color-highlight">
                            Date finished
                        </h2>
                        {#each education as ed}
                            <p class="my-2">
                                {ed.title}
                            </p>
                            <p class="my-2 text-center">
                                {ed.dateFinished}
                            </p>
                        {/each}
                    </div>
                    <div class="grid grid-cols-2" transition:fly={{
                        x: 1000,
                        duration: 2000,
                        delay:500
                    }}>
                        <h2 class="font-bold mt-4 color-highlight">Work Experience</h2>
                        <h2 class="font-bold mt-4 text-center color-highlight">
                            Date finished
                        </h2>
                        {#each workExperience as work}
                            <p class="my-2">
                                {work.place}
                            </p>
                            <p class="my-2 text-center">
                                {work.dateFinished}
                            </p>
                        {/each}
                    </div>
                   
                </div>
            {/if}
        </div>
    </div>
</div>

<style>

    .grid-auto-w{
        grid-template-columns: auto 1fr 1fr;
    }

    #about-wrapper {
        background-image: linear-gradient(gray,black),url("/background.svg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
        background-blend-mode: saturation;
    }

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
    #github-icon:hover > path {
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        fill: white;
    }
    #github-icon:hover {
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        background-color: #0e76a8;
    }
</style>
