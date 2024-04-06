<script lang="ts">
    import type { TimeLinePeriod } from '../../../types/Profile'

    export let timeline: TimeLinePeriod
    export let lineColor = 'white'
</script>

<div class="flex flex-row">
    <!-- line wrapper -->
    <div class="line-wrapper-width flex flex-col relative">
        <div class="border line-color mx-auto grow" />
        <div class="flex flex-row">
            <div id="solid-circle"
                class="line-width circle-width m-auto rounded-full border line-color relative left-1/4"
                style="border-color: {lineColor};background-color: {lineColor};"
            />
            <div id="line"
                class="border my-auto w-1/2"
                style="border-color: {lineColor}"
            />
        </div>
        <div class="border mx-auto grow" />
    </div>
    <!-- body wrapper -->
    <div class="card-color mr-0 flex flex-row my-8">
        <div
            class="h-full spacer md:visible invisible"
            style="background-color: {lineColor}"
        />
        <!-- date wrapper -->
        <div class="flex flex-col justify-between md:m-1 m-2 w-1/6">
            <h1 class="italic">{timeline.startDate}</h1>
            <h1 class="italic">{timeline.endDate}</h1>
        </div>
        <div
            class="w-0.5  my-2"
            style="background-color: {lineColor}"
        ></div>
        <!-- info wrapper -->
        <div class="m-1 ml-3 p-3 w-5/6">
            <div class="flex md:flex-row flex-col">
                <img
                    src={timeline.imgURL}
                    alt="timeline-placeholder.png"
                    class="w-48 md:mx-0 mx-auto"
                />
                <div class="my-auto md:ml-10">
                    <h1 class="text-xl pb-3">{timeline.position}</h1>
                    <h2 class="pb-2 italic">{timeline.establishment}</h2>
                </div>
            </div>
            <p class="mt-10">{timeline.description}</p>
        </div>
    </div>
</div>

<style>
    @import './line.css';
</style>
