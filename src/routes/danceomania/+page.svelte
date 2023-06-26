<script lang="ts">
    import { onMount } from "svelte";

    let image: string = "./images/events/danceomania.webp";
    let color: string = "#6A0F31";

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
    <title>LA FEST 2023 - Dance O' Mania</title>
    <meta
        name="description"
        content="Dance O' Mania, an event in LAFEST 2023"
    />
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">Dance O' Mania</h2>
        </div>
        <article>
            <p>
                Lose yourself in the groove of the beat as you set the stage on
                fire and prove to the world your burning desire. Enthral the
                audience with the rhythm coursing through your veins. Match the
                beat and bring forth the heat in Dance O' Mania.
            </p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span>
                    <div>
                        <i
                            >Contact Aadithyan K.A. at +91 96336 44710 for more
                            info</i
                        >
                    </div>
                </div>
            </footer>
        </article>
        <article>
            <h3 class="underline">Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Choreography</p></div>
                <div class="text-border"><p>Coordination</p></div>
                <div><p>Innovation</p></div>
            </div>
        </article>
        <article>
            <h3 class="underline">Rules</h3>
            <div class="rules">
                <div class="text-border">
                    <p>
                        Only one team comprised of 8 to 16 participants from
                        each school.
                    </p>
                </div>
                <div class="text-border">
                    <p>Performance should not exceed eight minutes.</p>
                </div>
                <div class="text-border"><p>Choose any track or music.</p></div>
                <div class="text-border">
                    <p>
                        Do not use any party poppers, explosive items, or any
                        powdery materials like ashes and vermillion during the
                        performance.
                    </p>
                </div>
                <div class="text-border">
                    <p>All sequences must be performed onstage.</p>
                </div>
                <div class="text-border">
                    <p>
                        Obscenity or vulgarity in the song or action will lead
                        to disqualification.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        USB drives are compulsory and should be brought by the
                        participating schools and handed over to the event head
                        on the day of the fest.
                    </p>
                </div>
                <div class="text-border">
                    <p>Special lighting will not be available.</p>
                </div>
                <div class="text-border">
                    <p>Judge's decision will be final.</p>
                </div>
                <div>
                    <p>
                        If any team portrays a particular theme, it must be
                        clear to the judges and the audience.
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
        background-image: linear-gradient(
            to bottom right,
            seaGreen 0%,
            seaGreen 25%,
            aqua 75%
        );
        font-size: 2rem;
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
