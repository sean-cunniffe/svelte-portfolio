<script lang="ts">
	import Home from "../components/home/home.svelte";
	import About from "../components/about/About.svelte";
	import Projects from "../components/projects/projects.svelte";
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	export let data: PageData;

	let aboutAnimation = false;
	let projectAnimation = false;


	onMount(()=>{
		window.addEventListener("scroll", () => {
			playAnimations();
		});
	});

	// check if compoennt is in view, if so set visible to true and animation will start
	// once true, keep true so animations dont keep repeating
	function playAnimations() {
		aboutAnimation = aboutAnimation
			? true
			: elementInViewport("#about-wrapper");
		projectAnimation = projectAnimation
			? true
			: elementInViewport("#projects-wrapper");
	}

	function elementInViewport(elId: string): boolean {
		let el: any = document.querySelector(elId);
		let top = el.offsetTop;
		let left = el.offsetLeft;
		let width = el.offsetWidth;
		let height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < window.pageYOffset + window.innerHeight &&
			left < window.pageXOffset + window.innerWidth &&
			top + height > window.pageYOffset &&
			left + width > window.pageXOffset
		);
	}
</script>
<svelte:head>
    <title>Sean Cunniffe Web Portfolio</title>
	<meta name="description" content="Explore the professional portfolio of Sean Cunniffe, a dedicated Backend Software Engineer. #SoftwareEngineer #BackendDevelopment #Portfolio">
</svelte:head>
<div id="parent">
	<Home {data} />
	<About {data} />
	<Projects {data} visible={projectAnimation} />
</div>

<style global lang="postcss">
</style>
