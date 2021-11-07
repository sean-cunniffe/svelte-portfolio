import {writable} from 'svelte/store';
import Home from "../Components/home.svelte";
import About from "../Components/About.svelte";
import Projects from "../Components/projects.svelte"
import type { SvelteComponent } from 'svelte';
import type { SvelteComponentDev } from 'svelte/internal';

export let component = writable(0);
export let currentComponent:string = null;
export const components = new Map<string, any>();
components.set('Home', Home).set('About', About).set('Projects', Projects);

export function changeComponent(comp: string){
    currentComponent = comp;
    component.set(components.get(comp));
}