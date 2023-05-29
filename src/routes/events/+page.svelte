<script lang="ts">
    import Event from '$lib/interface/event.svelte'
    import { base } from '$app/paths'

    import blockntangles from '$lib/thumbnails/blockntangles.webp'
    import danceomania from '$lib/thumbnails/danceomania.webp'
    import enquesta from '$lib/thumbnails/enquesta.webp'
    import harmony from '$lib/thumbnails/harmony.webp'
    import lapersona from '$lib/thumbnails/lapersona.webp'
    import lattire from '$lib/thumbnails/lattire.webp'
    import lebate from '$lib/thumbnails/lebate.webp'
    import pitch101 from '$lib/thumbnails/pitch101.webp'
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
            <Event name="Block N' Tangles" color="#21543D" image="{base}/images/events/blockntangles.webp" thumbnail={blockntangles} link="{base}/blockntangles"/>
            <Event name="Dance O' Mania" color="#6A0F31" image="{base}/images/events/danceomania.webp" thumbnail={danceomania} link="{base}/danceomania"/>
            <Event name="Enquesta" color="#896111" image="{base}/images/events/enquesta.webp" thumbnail={enquesta} link="{base}/enquesta"/>
        </div>
        <div class="events">
            <Event name="Harmony" color="#824F51" image="{base}/images/events/harmony.webp" thumbnail={harmony} link="{base}/harmony"/>
            <Event name="LA Persona" color="#897A11" image="{base}/images/events/lapersona.webp" thumbnail={lapersona} link="{base}/lapersona"/>
        </div>
        <div class="events">
            <Event name="L'Attire" color="#607B84" image="{base}/images/events/lattire.webp" thumbnail={lattire} link="{base}/lattire"/>
            <Event name="L'ebate" color="#766E7D" image="{base}/images/events/lebate.webp" thumbnail={lebate} link="{base}/lebate"/>
            <Event name="Pitch 101" color="#498E7B" image="{base}/images/events/pitch101.webp" thumbnail={pitch101} link="{base}/pitch101"/>
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
