<script lang="ts">
    import TypeIt from "typeit";
    import { onMount } from "svelte";

    export let sentence: string;

    let typeThis: any;

    onMount(() => {
        new TypeIt(typeThis, {
            strings: sentence,
            lifeLike: true,
            speed: 75,
        }).go();
    });
</script>

<span bind:this={typeThis} />

<style>
    span {
        margin: 0;
        font-size: 1.25rem;
        background-image: linear-gradient(
            to bottom right,
            seagreen 0%,
            seagreen 25%,
            aqua 75%
        );
        background-clip: text;
        color: transparent;
    }
</style>
