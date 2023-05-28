<script lang="ts">
    import { onMount } from "svelte";

    let image: string = './images/events/blockntangles.webp';
    let color: string = "#21543D"

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
    <title>LAFEST 2023 - Block N' Tangles</title>
    <meta name="description" content="Block N' Tangles, an event in LAFEST 2023">
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">Block N' Tangles</h2>
        </div>
        <article>
            <p>Learn. Adapt. Evolve. The matrix pushes you to your ultimate potential. Work fast but never alone in this improv event. Play your part and be content or step out of the mundane, aiming for the unprecedented. Be the stroke of luck your team desperately needs and open the pathway to glory. Block N' Tangles awaits.</p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span><div><i>Contact Navneeth V. Sanker at +91 94958 23690 for more info</i></div>
                </div>
            </footer>
        </article>
        <article>
            <h3>Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Spontaneous wit and humour</p></div>
                <div class="text-border"><p>Creativity and uniqueness</p></div>
                <div class="text-border"><p>Acting skills and stage presence</p></div>
                <div><p>Coordination and teamwork</p></div>
            </div>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border"><p>A school can send two teams consisting of three members each.</p></div>
                <div class="text-border"><p>There will be two offstage rounds, involving a preliminary written round to decide the teams that qualify for the second group discussion round.</p></div>
                <div class="text-border"><p>Four teams will qualify for the final onstage event.</p></div>
                <div><p>The onstage event will consist of three rounds.</p></div>
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
