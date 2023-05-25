<script lang="ts">
    import Event from '$lib/interface/event.svelte'
</script>

<svelte:head>
    <title>LAFEST 2023 - Events</title>
    <meta name="description" content="Events of LAFEST">
</svelte:head>

<div class="container">
    <div class="head">
        <h1 class="bg-grad">Events</h1>
    </div>
    <div class="events-container">
        <div class="events">
            <Event name="Block N' Tangles" info="Comedy" color="#21543D" image="./images/events/blockntangles.webp" thumbnail="./images/events/thumbnails/blockntangles.webp" link="blockntangles"/>
            <Event name="Dance O' Mania" info="Dance" color="#6A0F31" image="./images/events/danceomania.webp" thumbnail="./images/events/thumbnails/danceomania.webp" link="./danceomania"/>
            <Event name="Enquesta" info="Quiz" color="#896111" image="./images/events/enquesta.webp" thumbnail="./images/events/thumbnails/enquesta.webp" link="./enquesta"/>
        </div>
        <div class="events">
            <Event name="Harmony" info="Music" color="#824F51" image="./images/events/harmony.webp" thumbnail="./images/events/thumbnails/harmony.webp" link="./harmony"/>
            <Event name="La Persona" info="Personality" color="#897A11" image="./images/events/lapersona.webp" thumbnail="./images/events/thumbnails/lapersona.webp" link="./lapersona"/>
        </div>
        <div class="events">
            <Event name="L'attire" info="Fashion" color="#607B84" image="./images/events/lattire.webp" thumbnail="./images/events/thumbnails/lattire.webp" link="lattire"/>
            <Event name="L'ebate" info="Debate" color="#766E7D" image="./images/events/lebate.webp" thumbnail="./images/events/thumbnails/lebate.webp" link="./lebate"/>
            <Event name="Pitch 101" info="Marketing" color="#498E7B" image="./images/events/pitch101.webp" thumbnail="./images/events/thumbnails/pitch101.webp" link="./pitch101"/>
        </div>
    </div>
</div>

<style lang="scss">
    .bg-grad {
        font-size: 2rem;
        background-image: linear-gradient(to bottom right, seaGreen 0%, seaGreen 25%, aqua 75%);
        margin-bottom: 0;
        background-clip: text;
        color: transparent;
    }

    .head {
        margin-top: calc(var(--spacing) * 2);
        margin-bottom: 1rem;
        background: var(--card-sectionning-background-color);
        padding: calc(var(--block-spacing-vertical) * .66) var(--block-spacing-horizontal);
        border: solid 1px var(--credit-border);
        border-radius: var(--border-radius);
        box-shadow: var(--card-box-shadow);
    }

    @media screen and (min-width: 1025px) {
        .events-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .events {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .events-container {
            padding-bottom: var(--spacing);
        }
    }

</style>
