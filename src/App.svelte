<script lang="ts">
	import {
		component,
		changeComponent,
		currentComponent,
		components,
	} from "./Services/Stores";
	import nav from "./Components/navigation.svelte";
	let viewportComponent = null;

	component.subscribe((value) => {
		viewportComponent = value;
	});

	changeComponent("Home");

	// window.addEventListener(
	// 	"wheel",
	// 	() => {
	// 		if (
	// 			document.body.offsetHeight ==
	// 			window.pageYOffset + window.innerHeight
	// 		) {
	// 			let values = Array.from(components.keys());

	// 			for (let i = 0; i < components.size; i++) {
	// 				let tempC = values[i];
	// 				console.log(tempC);

	// 				if (tempC === currentComponent) {
	// 					console.log(tempC + " === " + currentComponent);
	// 					i++;
	// 					i = i == values.length ? 0 : i;
	// 					changeComponent(values[i]);
	// 				}
	// 			}
	// 		}
	// 	},
	// 	true
	// );
</script>

<div id="parent" class=" h-screen">
	<svelte:component this={viewportComponent} {nav} />
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
	#parent {
		scrollbar-width: 0;
	}
	::-webkit-scrollbar {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
	/* Optional: show position indicator in red */
	::-webkit-scrollbar-thumb {
		background: #ff0000;
	}
</style>
