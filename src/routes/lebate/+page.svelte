<script lang="ts">
    import { onMount } from "svelte";

    let image: string = "./images/events/lebate.webp";
    let color: string = "#766E7D";

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
    <title>LA FEST 2023 - L'ebate</title>
    <meta name="description" content="L'ebate, an event in LAFEST 2023" />
</svelte:head>

<div class="background">
    <main class="container">
        <div class="title">
            <h2 class="bg-grad">L'ebate</h2>
        </div>
        <article>
            <p>
                Here is a chance to showcase your literary prowess, fight for
                your ideas, and challenge your intellect in this cerebral battle
                fought not with swords or steel, but with logic and wit. Your
                convictions will be tested against those of others, and the best
                tool you possess is your mind. Sharpen your senses, think
                outside the box, express yourself and revel in this singular
                experience we call L'ebate.
            </p>
            <footer>
                <div class="info">
                    <span class="material-icons">info</span>
                    <div>
                        <i
                            >Contact Matthew K. Mathen at +91 88484 08296 for
                            more info</i
                        >
                    </div>
                </div>
            </footer>
        </article>
        <article>
            <h3>Judging criteria</h3>
            <div class="rules">
                <div class="text-border"><p>Analysis and reasoning</p></div>
                <div class="text-border"><p>Evidence provided</p></div>
                <div class="text-border">
                    <p>Organisation and presentation of ideas</p>
                </div>
                <div class="text-border">
                    <p>
                        Mode of delivery including voice, language, and
                        deportment
                    </p>
                </div>
                <div class="text-border"><p>Command over the language</p></div>
                <div class="text-border"><p>Pronunciation</p></div>
                <div><p>Adherence to time limits</p></div>
            </div>
        </article>
        <article>
            <h3>Rules</h3>
            <div class="rules">
                <div class="text-border">
                    <p>Each school may send only one team of two members.</p>
                </div>
                <div class="text-border">
                    <p>
                        Offstage preliminary rounds will decide the top teams
                        that will proceed to the finals.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        In the preliminary round, each speaker will be given
                        three minutes to speak and deliver his/her points,
                        followed by a rebuttal. A maximum of three questions
                        will be permitted during the rebuttal. Cross questioning
                        is not allowed.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        The finals will consist of multiple rounds, details of
                        which will be given on the day of the event.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        Participants will not be allowed to change their stance
                        during the debate.
                    </p>
                </div>
                <div class="text-border">
                    <p>
                        No new arguments may be introduced during the rebuttal.
                        Participants should simply defend their existing
                        arguments. Teammates cannot help each other out during
                        the rebuttal.
                    </p>
                </div>
                <div>
                    <p>
                        A questioner may ask a fair, clear, and concise question
                        that has a direct bearing on the debate.
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
        margin-bottom: 0;
        background-image: linear-gradient(
            to bottom right,
            seaGreen 0%,
            seaGreen 25%,
            aqua 75%
        );
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
