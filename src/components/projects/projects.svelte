<script lang="ts">
    import type { PageServerData } from "../../routes/$types";


    import ProjectCard from "./project_card.svelte";
    export let data: PageServerData;
    let delay = 0;
    interface Project {
        description: string;
        image: string;
        title: string;
        toolsAndSkills: string;
        link: string;
        repoLink: string | null | undefined;
    }
    let projects: Project[] = data.project
</script>

<div id="projects-wrapper">
    <div
        class="flex flex-col md:w-screen xl:w-3/4 m-auto pb-20 sm:p-7 overflow-x-hidden bg-main"
    >
        {#each projects as project}
            <ProjectCard
                title={project.title}
                description={project.description}
                skills={project.toolsAndSkills}
                imageURL={project.image}
                link={project.link}
                repoLink={project.repoLink}
            />
        {/each}
    </div>
</div>

<style>
</style>
