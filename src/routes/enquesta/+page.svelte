<script lang="ts">
    import { onMount } from "svelte";

    let image: string = './images/events/enquesta.webp';
    let color: string = "#896111"

    onMount(() => {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundColor = color
        document.body.style.backgroundBlendMode = "multiply"
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.height = "100dvh";
        document.body.style.transition = "height 0.25s";

        return () => {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "initial";
        }
    })
</script>

<svelte:head>
    <title>LAFEST 2023 - Enquesta</title>
    <meta name="description" content="Enquesta, an event in LAFEST 2023">
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">Enquesta</h2>
        </div>
        <article>
            <p>Take on the challenge in this battle where it matters what you know and how much of it you know. Indeed, one must seek the truth within, not without. All that matters is your ability to discern. Cut through the veils of ignorance to find the answer hidden right where you are looking. Enter the gates, for Enquesta awaits a new champion.</p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span><div><i>Contact Joel Jobby Jacob at +91 94479 76650 for more info</i></div>
                </div>
            </footer>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border"><p>A maximum of four teams from a school can participate in the prelims.</p></div>
                <div class="text-border"><p>There can be two members per team.</p></div>
                <div class="text-border"><p>There will be a preliminary round with twenty questions to select the teams for the finals.</p></div>
                <div class="text-border"><p>No more than two teams from the same school can qualify for the finals.</p></div>
                <div class="text-border"><p>In case of a tie, additional questions will be asked to resolve it.</p></div>
                <div class="text-border"><p>The top six teams will proceed to the finals.</p></div>
                <div class="text-border"><p>Questions for the finals can be of Pounce and Bounce, Point Auction or Rapid fire format.</p></div>
                <div><p>The quiz master's decision is final.</p></div>
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
