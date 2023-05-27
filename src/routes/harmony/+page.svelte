<script lang="ts">
    import { onMount } from "svelte";

    let image: string = './images/events/harmony.webp';
    let color: string = "#824F51"

    onMount(() => {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundColor = color
        document.body.style.backgroundBlendMode = "multiply"
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundAttachment = "fixed";

        return () => {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "initial";
        }
    })
</script>

<svelte:head>
    <title>LAFEST 2023 - Harmony</title>
    <meta name="description" content="Harmony, an event in LAFEST 2023">
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">Harmony</h2>
        </div>
        <article>
            <p>Listen as every chord that is struck takes you to a place supernal… As the symphony of melodies flows through the air and enters the very pores of your skin… As music infused with passion permeates the atmosphere… As your heartbeat syncs with the beats echoing around you… Listen to Harmony.</p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span><div><i>Contact Niranjan B. Kumar at +91 91882 62721 for more info</i></div>
                </div>
            </footer>
        </article>
        <article>
            <h3>Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Vocal quality and voice modulation</p></div>
                <div class="text-border"><p>Team coordination</p></div>
                <div class="text-border"><p>Creativity and improvisation</p></div>
                <div class="text-border"><p>Stage Presence</p></div>
                <div><p>Overall entertainment</p></div>
            </div>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border"><p>A minimum of five and a maximum of ten participants are allowed in a team.</p></div>
                <div class="text-border"><p>Each team has eight minutes for performance and two minutes for stage setting.</p></div>
                <div class="text-border"><p>Each team must have a minimum of three instruments and not more than four vocalists.</p></div>
                <div class="text-border"><p>All categories of songs are allowed except devotional and classical songs.</p></div>
                <div class="text-border"><p>USB-MIDI controllers, synthesisers and shoulder synthesisers are permitted on condition that they are pre-recorded MIDI loops.</p></div>
                <div class="text-border"><p>Other pre-recorded MIDI files, rhythem boxes, karaoke, drum pads and rhythem pads are not permitted.</p></div>
                <div class="text-border"><p>Six output cables, five microphones, two keyboard stands and a standard drum kit will be provided.</p></div>
                <div class="text-border"><p>Additional instruments and accessories should be brought byt the contestants, if required.</p></div>
                <div><p>Amplifiers will be made available to teams upon request.</p></div>
            </div>
        </article>
    </main>
</div>

<style lang="scss">
    .info {
        border: solid 1px rgba($color: aqua, $alpha: 0.25);
        border-radius: var(--border-radius);
        padding: 0.5rem;
        width: fit-content;
        background: rgba($color: aqua, $alpha: 0.125);
        display: flex;
        flex-direction: row;
        @media screen and (min-width: 1024px) {
            justify-content: center;
            align-items: center;
        }
    }

    .bg-grad {
        background-image: linear-gradient(to bottom right, seaGreen 0%, seaGreen 25%, aqua 75%);
        font-size: 2rem;
        margin-bottom: 0;
        background-clip: text;
        color: transparent;
    }

    .rules {
        border: solid 1px  var(--credit-border);
        border-radius: var(--border-radius);

        p {
            padding: var(--spacing);
            padding-bottom: 0;
        }

        .text-border {
            border-bottom: solid 1px var(--credit-border);
            padding: 0;
        }
    }

    .background {
        height: 100%;
        background: linear-gradient(to bottom, transparent 0%, var(--background-color) 75%);
    }

    .title {
        margin-top: calc(var(--spacing) * 2);
        background: var(--card-background-color);
        padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
        border: solid 1px var(--credit-border);
        border-radius: var(--border-radius);
        box-shadow: var(--card-box-shadow);
    }
</style>
