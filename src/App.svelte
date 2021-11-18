<script lang="ts">
	import Home from "./Components/home.svelte";
	import About from "./Components/About.svelte";
	import Projects from "./Components/projects.svelte";
	import ComponentTitle from "./Components/componentTitle.svelte";

	let aboutAnimation = false;
	let projectAnimation = false;
	window.addEventListener("scroll", () => {
		playAnimations();
	}, );

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
	<title>Sean Cunniffe's Portfolio</title>
	<meta name="description" content="Hi, My name is Sean Cunniffe, I'm a university graduate with a Bachelor’s in Electronic and Computer Engineering, and a Certificate in Software Engineering, self-motivated with leadership and teamwork abilities and a drive to always improve and increase my skill set in Software Engineering and Web Development."/>
</svelte:head>

<div id="parent">
	<Home/>
	<ComponentTitle title={"About"}></ComponentTitle>
	<About visible={aboutAnimation} />
	<ComponentTitle title={"Projects"}></ComponentTitle>
	<Projects visible={projectAnimation} />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	body {
		margin: 0;
		padding: 0;
		height: auto;
	}
	body::-webkit-scrollbar {
		width: 0.5rem;
	}

	body::-webkit-scrollbar-track {
		background: #4d4d4d;
	}

	body::-webkit-scrollbar-thumb {
		background: white;
	}

	#parent {
		scroll-snap-type: block mandatory;
	}
	#parent > * {
		scroll-snap-align: start;
	}
</style>
