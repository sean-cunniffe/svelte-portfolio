<script lang="ts">
import type { BehaviorSubject } from "rxjs";

    import { fly } from "svelte/transition";
    export let visible = false;
    export let data: BehaviorSubject<any>;
    let education: Education[] = [];
    let workExperience: WorkExperience[] = []
    let bio: String[] = []
    let profilePic = ""
    let linkedin = ""
    let email = ""
    let github = ""
    data.subscribe(value=>{
        education = value.profile.education
        workExperience = value.profile.workExperience
        bio = value.profile.bio;
        profilePic = value.profile.profilePic
        linkedin = value.profile.linkedin
        github = value.profile.github
        email = value.profile.email
        let pp = (<HTMLImageElement>document.getElementById("profilePic"));
        if(pp)
            pp.src = value.profile.profilePic;
    });
    interface Education {
        title: string;  
        dateFinished: string;
    }
    interface WorkExperience{
        place: string;
        dateFinished: string
    }
</script>

<div id="about-wrapper" class="select-none"
>
    <div
        class="min-h-screen flex flex-col mb-8 md:mb-0 md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 bg-white overflow-x-hidden"
    >
    
        <div class="flex flex-col md:flex-row w-full m-auto">
            {#if visible}
                <div class="w-3/4 md:w-3/5 2xl:w-2/5 mx-auto md:mx-0">
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
                            <svg
                                id="github-icon"
                                aria-hidden="true"
                                data-prefix="fab"
                                data-icon="github-square"
                                class="prefix__prefix__svg-inline--fa prefix__prefix__fa-github-square prefix__prefix__fa-w-14 h-10 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 448"
                            >
                                <path
                                    fill="currentColor"
                                    d="M450.462-11.692L41.846-15.385c-26.499-.24-60.055 11.08-61.538 37.539l-23.385 417.23c-1.483 26.46 65.194 20.656 91.692 20.924L414.77 464c34.26.345 59.136-20.916 57.846-47.385L454.77 50.462c-1.29-26.469 22.191-61.915-4.307-62.154zM277.3 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 133.6 388 225.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                                />
                            </svg>
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
                        class="text-center md:text-left mt-3.5 md:mt-0 text-3xl font-thin"
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
                        <h2 class="font-bold mt-4">Education</h2>
                        <h2 class="font-bold mt-4 text-center">
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
                        <h2 class="font-bold mt-4">Work Experience</h2>
                        <h2 class="font-bold mt-4 text-center">
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
        background-image: linear-gradient(gray,black),url("/assets/images/background.svg");
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
