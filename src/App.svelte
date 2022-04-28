<script lang="ts">
	import Home from "./Components/home.svelte";
	import About from "./Components/About.svelte";
	import Projects from "./Components/projects.svelte";
	import ComponentTitle from "./Components/componentTitle.svelte";
	// Import the functions you need from the SDKs you need
	import { initializeApp } from "firebase/app";
	import { getDatabase, ref, child, get } from "firebase/database";
	import { Subject } from "rxjs";
	const firebaseConfig = {
		apiKey: "AIzaSyAvRHZJehOoiB8CYaFHarHD7BIWAmDuti4",
		authDomain: "web-portfolio-b463f.firebaseapp.com",
		// The value of `databaseURL` depends on the location of the database
		databaseURL:
			"https://web-portfolio-b463f-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "web-portfolio-b463f",
		storageBucket: "web-portfolio-b463f.appspot.com",
		messagingSenderId: "105787201060",
		appId: "1:105787201060:web:52de0afde43d85458caab1",
		// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
		measurementId: "G-Q4PWGY531T",
	};
	const app = initializeApp(firebaseConfig);

	// Get a reference to the database service
	const database = getDatabase(app);

	let firebaseData = new Subject();

	const dbRef = ref(database);
	get(child(dbRef, `/`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				firebaseData.next(snapshot.val());
			} else {
				console.log("No data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});

	let aboutAnimation = false;
	let projectAnimation = false;

	window.addEventListener("scroll", () => {
		playAnimations();
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

<div id="parent">
	<Home data={firebaseData} />
	<ComponentTitle title={"About"} />
	<About data={firebaseData} visible={aboutAnimation} />
	<ComponentTitle title={"Projects"} />
	<Projects data={firebaseData} visible={projectAnimation} />
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
