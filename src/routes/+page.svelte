<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        document.body.style.backgroundImage = "radial-gradient(rgba($color: rgb(71, 153, 102), $alpha: 50%) 0%, transparent 50%, transparent 100%)";
    })
</script>

<svelte:head>
    <title>LAFEST 2023</title>
    <meta name="description" content="Website for LAFEST 2023">
</svelte:head>

<div class="layout">
    <img src="./images/background-FX.svg" alt="affects"/>
    <div class="text">
        <div class="title">
            <h1>LAFEST</h1>
            <h1>2023</h1>
        </div>
        <blockquote>
            "Indulge in ardour, revel in grandeur"
        </blockquote>
    </div>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: calc(var(--spacing) * 2);
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
            }

            img {
                width: 60%;
            }
        }
    }

    img {
        width: 40%;
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
