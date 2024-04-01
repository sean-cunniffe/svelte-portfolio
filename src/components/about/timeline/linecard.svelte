<script lang="ts">
    import type { TimeLinePeriod } from '../../../types/Profile'

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
            <div
                class="border my-auto w-1/2"
                style="border-color: {lineColor}"
            />
        </div>
        <div class="border mx-auto grow" />
    </div>
    <!-- body wrapper -->
    <div class="card-color grow flex flex-row my-8 element">
        <div
            class="h-full spacer md:visible invisible"
            style="background-color: {lineColor}"
        />
        <!-- date wrapper -->
        <div class="flex flex-col justify-between md:m-1 m-2">
            <h1>{timeline.startDate}</h1>
            <h1>{timeline.endDate}</h1>
        </div>
        <div
            class="w-0.5 grow my-2"
            style="background-color: {lineColor}"
        ></div>
        <!-- info wrapper -->
        <div class="m-1 ml-3 p-3">
            <div class="flex md:flex-row flex-col mx-auto">
                <img
                    src={timeline.imgURL}
                    alt="timeline-placeholder.png"
                    class="h-52 w-52 md:mx-0 mx-auto"
                />
                <div class="mt-auto md:ml-2">
                    <h1 class="text-xl pb-3">{timeline.position}</h1>
                    <h2 class="pb-2">{timeline.establishment}</h2>
                    <div
                        class="border w-100"
                        style="border-color: {lineColor}"
                    />
                </div>
            </div>
            <p>{timeline.description}</p>
        </div>
    </div>
</div>

<style>
    @import './line.css';
</style>
