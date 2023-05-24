<script lang="ts">
    import { onMount } from "svelte";

    let image: string = './images/events/lapersona.webp';
    let color: string = "#897A11"

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
    <title>LAFEST 2023 - La Persona</title>
    <meta name="description" content="La Persona, an event in LAFEST 2023">
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <hgroup>
                <h2 class="bg-grad">La Persona</h2>
                <h3>Oui, c'est ma personnalité</h3>
            </hgroup>
        </div>
        <article>
            <p>Cut through the facade and bring your actual self to the stage. This is the only event in LA Fest where you are truly and completely alone. Only your persona can save you in this war with yourself, therefore let your truest self be judged without fear of being judged. The different levels of your persona will be explored and tested. You may even be exposed. Bask in the glory of your own authenticity. Welcome to La Persona</p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span><i>Mission: Survive</i>
                </div>
            </footer>
        </article>
        <article>
            <h3>Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Spontaneity</p></div>
                <div class="text-border"><p>Charisma</p></div>
                <div class="text-border"><p>Stage presence</p></div>
                <div class="text-border"><p>Creativity</p></div>
                <div class="text-border"><p>Confidence</p></div>
                <div><p>Linguistic competence</p></div>
            </div>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border"><p>A school can send a maximum of four participants.</p></div>
                <div class="text-border"><p>There will be six rounds - two preliminary with one of them being written and another a surprise, then four onstage rounds Round 1 through 4. Round 1 is to introduce yourself with a prop. Round 2 is a situation round, the participants will be given situations and their reactions will be judged. Round 3 is a Surprise. Round 4 is the Judges' Round, the participants will be questioned by the judges.</p></div>
                <div class="text-border"><p>Participants are expected to be dressed modestly.</p></div>
                <div><p>No vulgarity or obscenity will be tolerated.</p></div>
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
    }

    .bg-grad {
        background-image: linear-gradient(to bottom right, seaGreen 0%, seaGreen 25%, aqua 75%);
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
