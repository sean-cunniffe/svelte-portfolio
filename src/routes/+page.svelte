<script lang="ts">
    import Home from "./home.svelte";
	import About from "./About.svelte";
	import Projects from "./projects.svelte";
	import ComponentTitle from "./componentTitle.svelte";
    import type { PageData } from './$types';
    import { onMount } from "svelte";

    export let data: PageData;

    let aboutAnimation = false;
	let projectAnimation = false;

	onMount(()=>{
		window.addEventListener("scroll", () => {
			playAnimations();
		});
	})

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

<div id="parent">
	<Home data={data} />
	<ComponentTitle title={"About 🕺"}/>
	<About data={data} visible={aboutAnimation} />
	<ComponentTitle title={"Projects 🤓"} />
	<Projects data={data} visible={projectAnimation} />
</div>

<style global lang="postcss">
	#parent {
		scroll-snap-type: block mandatory;
	}
	#parent > * {
		scroll-snap-align: start;
	}
</style>
