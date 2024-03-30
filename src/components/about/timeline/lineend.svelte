<script lang="ts">
    export let isStart: boolean = true
</script>

<div class="w-100 h-20">
    <!-- line wrapper -->
    <div
        class="w-10 h-full flex flex-col {isStart
            ? 'justify-end'
            : ''}"
    >
        <div
            class="w-full h-1/2 flex {isStart
                ? 'flex-col'
                : 'flex-col-reverse'}"
        >
            <!-- line-circle-->
            <div class="line-width circle-width m-auto rounded-full border line-color" />
            <!-- line -->
            <div class="border line-color grow mx-auto" />
        </div>
    </div>
</div>

<style>
    @import './line.css';
</style>
