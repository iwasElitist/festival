<script lang="ts">
    import { onMount } from 'svelte';

    let hoverIcon: boolean = false;
    let isMounted: boolean = false;

    export let name: string;
    export let link: string;
    export let image: string;
    export let thumbnail: string;
    export let color: string;

    onMount(() => {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundBlendMode = "multiply";
        document.body.style.backgroundImage = `linear-gradient(to top, ${color}, var(--background-color))`;
        document.body.style.transition = "background-color 1s ease-in-out, background-image 1s linear";
        const screenRatio1: any = window.matchMedia("(min-width: 1400px)");

        function isDevice1(screenRatio1: any) {
            if (screenRatio1.matches) {
                document.body.style.height = "100lvh";
            } else {
                document.body.style.height = "100%";
            }
        }
        
        isDevice1(screenRatio1)
        screenRatio1.addListener(isDevice1)

        isMounted = true;

        return () => {
            document.body.style.backgroundColor = "initial";
            document.body.style.backgroundImage = "none";
        }
    })

    function handleHoverOn() {
        hoverIcon = !hoverIcon;
        if (isMounted) {
            document.body.style.backgroundColor = color;
            document.body.style.backgroundImage = `url(${image})`;
        }
    }

    function handleHoverOff() {
        hoverIcon = !hoverIcon;
        if (isMounted) {
            document.body.style.backgroundColor = "initial";
            document.body.style.backgroundImage = `url(${image}), linear-gradient(to top, ${color}, #131d22)`;
        }
    }
</script>

<a href={link}>
    <div class="button" on:mouseover={handleHoverOn} on:mouseout={handleHoverOff} on:focus={handleHoverOn} on:blur={handleHoverOff} style="--image: url({thumbnail})">
        <div class="image"></div>
        <hgroup class="text">
            <h6>{name}</h6>
        </hgroup>
    </div>
</a>

<style lang="scss">
    a {
        text-decoration: none;
    }

    .image {
        height: 125px;
        border-radius: var(--border-radius);
        width: 30%;
        background-image: var(--image);
        background-position: center;
        background-size: cover;
    }

    .text {
        margin: auto;
        margin-left: var(--spacing);
        font-size: 0.25rem;
    }

    .button {
        display: flex;
        flex-direction: row;
        text-align: center;
        background: var(--card-background-color);
        border: solid 1px var(--credit-border);
        border-radius: var(--border-radius);
        box-shadow: 0rem 0rem 0rem var(--contrast);
        transform: scale(100%);
        transition: box-shadow 0.25s, transform 0.25s;
        margin: var(--spacing);
        user-select: none;

        @media only screen and (min-width: 1280px) {
            width: 18rem;
        }

        @media only screen and (min-width: 1366px) {
            width: 20rem;
        }

        @media only screen and (min-width: 1800px) {
            width: 25rem;
        }
    }

    @media only screen and (max-width: 512px) {
        .image {
            height: 100px;
        }
    }

    .button:hover {
        box-shadow: var(--card-box-shadow);
        transform: scale(102.5%); 
    }
</style>
