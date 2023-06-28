<script lang="ts">
    import { onMount } from "svelte";

    let image: string = "./images/events/lattire.webp";
    let color: string = "#607B84";

    onMount(() => {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundColor = color;
        document.body.style.backgroundBlendMode = "multiply";
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundAttachment = "fixed";

        return () => {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "initial";
        };
    });
</script>

<svelte:head>
    <title>LA FEST 2023 - L'Attire</title>
    <meta name="description" content="L'attire, an event in LAFEST 2023" />
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">L'Attire</h2>
        </div>
        <article>
            <p>
                Boldness, creativity, uniqueness and elegance. L'attire is an
                event where you need to present all these skills to put yourself
                ahead of others. Follow the trend or set a new one. All that
                matters is the outcome. So, select your frontman, create a work
                of art and prove yourself on the dais. Step up and conquer
                L'attire.
            </p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span>
                    <div>
                        <i
                            >Contact Don Roshan Thomas at +91 70125 73189 for
                            more info</i
                        >
                    </div>
                </div>
            </footer>
        </article>
        <article>
            <h3>Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Presentation and design</p></div>
                <div class="text-border"><p>Attire elucidation</p></div>
                <div class="text-border"><p>Creativity</p></div>
                <div class="text-border">
                    <p>Skill in handling the theme</p>
                </div>
                <div class="text-border">
                    <p>Confidence and attitude of the models</p>
                </div>
                <div><p>Elegance</p></div>
            </div>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border">
                    <p>
                        One team representing each school, comprising 3 models
                        and 3 designers.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        Teams will be assigned a theme 6 hours before the event.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        Each team is expected to prepare 3 costumes along with a
                        minimum of 1 prop relevant to the theme.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        Materials for the preparation of the costumes should be
                        brought by the participants.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        You may play music of your choice during the 4-minute
                        ramp walk.
                    </p>
                </div>
                <div class="text-border">
                    <p>The designed costume must be worn over a black base.</p>
                </div>
                <div>
                    <p>
                        The designers should prepare a short description of the
                        outfits for the judges.
                    </p>
                </div>
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
        background-image: linear-gradient(
            to bottom right,
            seaGreen 0%,
            seaGreen 25%,
            aqua 75%
        );
        margin-bottom: 0;
        background-clip: text;
        color: transparent;
    }

    .rules {
        border: solid 1px var(--credit-border);
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
        background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--background-color) 75%
        );
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
