<script lang="ts">
    import type { TimeLinePeriod } from "../../../types/Profile"


    export let timeline: TimeLinePeriod
    export let lineColor = 'white'
</script>

<div class="flex flex-row">
    <!-- line wrapper -->
    <div class="line-wrapper-width flex flex-col">
        <div class="border line-color mx-auto grow" />
        <div class="flex flex-row">
            <!-- solid circle -->
            <div
                class="line-width circle-width m-auto rounded-full border line-color relative left-1/4"
                style="border-color: {lineColor};background-color: {lineColor};"
            />
            <!-- line -->
            <div class="border my-auto w-1/2" style="border-color: {lineColor}"/>
        </div>
        <div class="border mx-auto grow" />
    </div>
    <!-- body wrapper -->
    <div class="bg-gray-600 grow flex flex-row my-8">
        <div class="h-full spacer" style="background-color: {lineColor}" />
        <!-- date wrapper -->
        <div class="flex flex-col justify-between m-1">
            <h1>{timeline.startDate}</h1>
            <h1>{timeline.endDate}</h1>
        </div>
        <div class="w-0.5 h-5/6 my-auto " style="background-color: {lineColor}"></div>
        <!-- info wrapper -->
        <div class="m-1 ml-3">
            <div class="flex md:flex-row flex-col mx-auto">
                <img
                    src="{timeline.imgURL}"
                    alt="timeline-placeholder.png"
                    class="h-24 w-24"
                />
                <div class="mt-auto md:ml-2">
                    <h1>{timeline.position}</h1>
                    <h2>{timeline.establishment}</h2>
                    <div class="border w-100" style="border-color: {lineColor}"/>
                </div>
            </div>
            <p>{timeline.description}</p>
        </div>
    </div>
</div>

<style>
    @import './line.css';
</style>
