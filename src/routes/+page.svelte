<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import Typeist from "$lib/interface/typeit.svelte";

    onMount(() => {
        /*
        let final = new Date("Jul 1, 2023 00:00:00").getTime();
        let current = new Date();

        let time = setInterval(function () {
            let now =
                new Date().getTime() +
                (330 + current.getTimezoneOffset()) * 60000;
            let left = final - now;

            let days = Math.floor(left / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((left % (1000 * 60)) / 1000);

            document.getElementById("timer")!.innerHTML =
                days + " d " + hours + " h " + minutes + " m " + seconds + " s";

            if (left < 0) {
                clearInterval(time);
                document.getElementById("timer")!.innerHTML = "Now";
            }
        }, 1000);
        */

        return () => {
            document.body.style.backgroundImage = "none";
            // clearInterval(time);
        };
    });

    let tag: string = '"Indulge in ardour, revel in grandeur"';
</script>

<svelte:head>
    <title>LA FEST 2023</title>
    <meta name="description" content="Website for LAFEST 2023" />
</svelte:head>

<div class="layout">
    <video
        id="video"
        width="2560px"
        height="1440px"
        autoplay
        loop
        muted
        preload="auto"
    >
        <source src="{base}/background.webm" type="video/webm" />
    </video>
    <img
        src="{base}/images/lafest-aurora.svg"
        height="40%"
        width="40%"
        alt="affects"
    />
    <div class="text">
        <div class="title">
            <h1>LA FEST</h1>
            <h1 style="font-family: 'Inter Tight Variable';">2023</h1>
        </div>
        <div class="quote">
            <Typeist sentence={tag} />
        </div>
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
        font-size: 0.5rem;
        font-family: "Flare Regular";
        text-align: center;
        word-wrap: normal;
        height: 2rem;
        margin-bottom: 1rem;
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
                    width: 500px;
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
        margin-bottom: 1rem;

        h1 {
            margin: 0;
            font-family: "Flare Regular";
            font-size: 3rem;
            background-image: linear-gradient(
                to bottom right,
                seaGreen 0%,
                seaGreen 25%,
                aqua 75%
            );
            background-clip: text;
            color: transparent;
            line-height: 1;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        width: 500px;
        padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
    }
</style>
