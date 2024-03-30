<script lang="ts">
    import Lineend from './lineend.svelte'
    import LineCard from './linecard.svelte'
    import type { TimeLinePeriod } from '../../../types/Profile'
    export let timeline: TimeLinePeriod[] = []
</script>

<div
    id="timeline"
    class="flex flex-col h-full grow relative md:-left-0 -left-4"
>
    <!--header-->
    <Lineend isStart={true} />
    <!-- timeline card -->
    {#each timeline as period}
    <LineCard timeline={period}/>
    {/each}
    <!-- footer -->
    <Lineend isStart={false} />
</div>
