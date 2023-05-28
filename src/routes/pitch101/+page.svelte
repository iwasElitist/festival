<svelte:head>
    <title>LAFEST 2023 - Pitch 101</title>
    <meta name="description" content="Pitch 101, an event in LAFEST 2023">
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";

    let image: string = './images/events/pitch101.webp';
    let color: string = "#498E7B"

    onMount(() => {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundColor = color
        document.body.style.backgroundBlendMode = "multiply"
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100lvh";
        document.body.style.transition = "height 0.25s";

        return () => {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "initial";
        }
    })
</script>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">Pitch 101</h2>
        </div>
        <article>
            <p>Do you know what the definition of insanity is? Insanity is doing the same thing over and over again, expecting things to change. That's what advertisements are becoming. Repetitive. Boring. Changeless. Aren't you tired of these ads? This is your chance to change it all. We give the product; you make the ad. The goal? To catch the eye of every beholder! Every word, every shot, and every transition matters. Captivate the audience with your Pitch 101.</p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span><div><i>Contact Devin Maheswar at +91 80755 13601 for more info</i></div>
                </div>
            </footer>
        </article>
        <article>
            <h3>Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Plot (Story Arc and Plausibility)</p></div>
                <div class="text-border"><p>Attraction (Premise & Entertainment Value)</p></div>
                <div class="text-border"><p>Theme (Identity & Depth)</p></div>
                <div class="text-border"><p>Tag line (Slogan of the brand)</p></div>
                <div class="text-border"><p>Cinematography (Visual Language & lighting, Setting, and Wardrobe)</p></div>
                <div><p>Editing (Pace & Effects)</p></div>
            </div>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border"><p>Each school can send a four-member team.</p></div>
                <div class="text-border"><p>Teams may work on their video from 8 am to 1pm.</p></div>
                <div class="text-border"><p>Green Screens will be provided to participating schools.</p></div>
                <div class="text-border"><p>Teams will have to bring their own equipment to shoot and edit their project.</p></div>
                <div class="text-border"><p>Participants are permitted to bring their smartphone.</p></div>
                <div class="text-border"><p>Use of presets and AI-generated videos is strictly prohibited.</p></div>
                <div class="text-border"><p>Editors can use Adobe After Effects, Adobe Premiere Pro, DaVinci Resolve, VSDC or any editing software of their choice to edit.</p></div>
                <div class="text-border"><p>Participants should create and submit a tag line related to their product.</p></div>
                <div class="text-border"><p>Each team can have two editors and two videographers.</p></div>
                <div><p>The duration of the video must be between 30 seconds and one minute 30 seconds.</p></div>
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
        font-size: 2rem;
        background-image: linear-gradient(to bottom right, seaGreen 0%, seaGreen 25%, aqua 75%);
        background-clip: text;
        margin-bottom: 0;
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
