<script lang="ts">
    import ProjectCard from "./project_card.svelte";
    export let nav = null;
    let delay = 0;
</script>

<div id="projects-wrapper">
    <div
        class="h-screen flex flex-col md:w-screen xl:w-3/4 m-auto pb-20 sm:p-7 overflow-x-hidden bg-white"
    >
        <svelte:component this={nav} />
        <ProjectCard
            title={"Exercise Tracker API"}
            description={"A Rest API for users to track their exercise progress. The user can " +
                "create an account that is verified by email verification and then " +
                "tracks their progress using the endpoints provided. The API uses " +
                "JSON Web Tokens for authentication which is added to the security." +
                "filters of Spring Security."}
            skills={"Java, Spring Boot/Security/Data"}
            imageURL={"assets/images/fitness-tracker-smaller.jpg"}
            delay={(delay += 300)}
        />
        <ProjectCard
            title={"Visual Searching Algorithms"}
            description={"A visual demonstration of two different searching algorithms for searching trees/graphs," +
                " Depth-First Search and Breadth-First Search. The app generates a random graph of nodes with random connections," +
                "the two searching algorithms transverse the graph to either find a selected node or to just demonstrate how they transverse a graph."}
            skills={"TypeScript, Angular, Searching Algorithms"}
            imageURL={"assets/images/search-smaller.jpg"}
            link={"https://sean-cunniffe.github.io/Tree-Search"}
            delay={(delay += 300)}
        />

        <ProjectCard
            title={"Visual Sorting Algorithms"}
            description={"A visual demonstration and explanation of four different sorting algorithms."}
            imageURL={"assets/images/sorting-algo.jpg"}
            skills={"TypeScript, Sorting algorithms"}
            link={"https://sean-cunniffe.github.io/visual-sorting-algorithms/"}
            delay={(delay += 300)}
        />

        <ProjectCard
            title={"Greenway Bicycles"}
            description={"A bicycle companys website where customers can rent bicycles online and staff can manage inventory, customers, bookings, and other staff." +
                "This project was completed using TDD and done with an agile scrum team."}
            skills={"Java, JSF, HTML, CSS, Mockito, CircleCi, Bitbucket, Jira"}
            imageURL={"assets/images/greenway.jpg"}
            delay={(delay += 300)}
        />
        <ProjectCard
            title={"Cart.py"}
            description={"A Classification and Regression Tree algorithm that classifies a set of parameters based on a given dataset. " +
                "The algorithm builds a decision tree based on the Gini's impurity index. I built this project using Test Driven Development."}
            skills={"Python, TDD"}
            imageURL={"assets/images/decision-tree.png"}
            delay={(delay += 300)}
        />
    </div>
</div>

<style>
    #projects-wrapper {
        background-image: url("assets/images/background.svg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
    }
</style>
