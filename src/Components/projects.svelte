<script lang="ts">
    import type { BehaviorSubject } from "rxjs";

    import ProjectCard from "./project_card.svelte";
    export let visible = false;
    let delay = 0;
    export let data: BehaviorSubject<any>;
    interface Project {
        description: String;
        image: String;
        title: String;
        toolsAndSkills: String;
        link: String;
    }
    let projects: Project[] = [];

    data.subscribe((value) => {
        console.log(value.project);
        
        projects = value.project;
    });
</script>

<div id="projects-wrapper">
    <div
        class="flex flex-col md:w-screen xl:w-3/4 m-auto pb-20 sm:p-7 overflow-x-hidden bg-white"
    >
        {#each projects as project}
            <ProjectCard
                title={project.title}
                description={project.description}
                skills={project.toolsAndSkills}
                imageURL={project.image}
                link={project.link}
                delay={(delay += 300)}
                {visible}
            />
        {/each}
    </div>
</div>

<style>
    #projects-wrapper {
        width: 100%;
        min-height: 100vh;
        background-image: linear-gradient(gray, white),
            url("/assets/images/background.svg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
        background-blend-mode: saturation;
    }
</style>
