<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    onMount(() => {
        document.body.style.backgroundImage = "radial-gradient(rgba($color: rgb(71, 153, 102), $alpha: 50%) 0%, transparent 50%, transparent 100%)";
    })
</script>

<svelte:head>
    <title>LAFEST 2023</title>
    <meta name="description" content="Website for LAFEST 2023">
</svelte:head>

<div class="layout">
    <video id="video" width="1920px" height="1080px" autoplay loop muted preload="auto">
        <source src="{base}/background.mp4" type="video/mp4"/>
    </video>
    <img src="{base}/images/lafest-aurora.svg" height="40%" width="40%" alt="affects"/>
    <div class="text">
        <div class="title">
            <h1>LAFEST</h1>
            <h1>2023</h1>
        </div>
        <blockquote class="quote">
            <p>"Indulge in ardour, revel in grandeur"</p>
        </blockquote>
    </div>
</div>

<style lang="scss">
    #video {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -1;
        aspect-ratio: 16 / 9;
    }

    .quote {
        border-inline-start-color: #26353b;

        p {
            margin: 0;
            font-size: 1.25rem;
            background-image: linear-gradient(to bottom right, seagreen 0%, seagreen 25%, aqua 75%);
            background-clip: text;
            color: transparent;
        }
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: calc(var(--spacing) * 2);
    }

    .layout {
        margin-top: var(--block-spacing-vertical);
    }

    @media screen and (max-width: 1024px) {
        .layout {
            display: flex;
            flex-direction: column;
            .text {
                width: 100%;
                @media screen and (min-width: 500px) {
                    width: 400px;
                }
                padding-bottom: 0;
                padding-top: 0;
            }

            img {
                width: 50%;
            }
        }
    }

    img {
        width: 30%;
    }

    .title {
        display: flex;
        flex-direction: column;

        h1 {
            margin: 0;
            font-size: 3rem;
            background-image: linear-gradient(to bottom right, seaGreen 0%, seaGreen 25%, aqua 75%);
            background-clip: text;
            color: transparent;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        width: 500px;
        padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
    }
</style>
