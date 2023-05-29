<script lang="ts">
    import { fade } from 'svelte/transition';
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
        document.body.style.backgroundImage = `linear-gradient(to top, ${color}, #131d22)`;
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
        {#if hoverIcon === true}
            <svg transition:fade|local="{{delay: 100,duration: 150}}" width="50px" height="50px" version="1.1" viewBox="0 0 18.521 18.521" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-77.708 -51.347)">
                    <g transform="matrix(.95027 0 0 .95027 3.8646 2.5536)" stroke-width="0">
                        <circle cx="87.453" cy="61.092" r="9.7451" fill="#f5f5f5" stop-color="#000000"/>
                        <path transform="matrix(1.2667 0 0 1.2667 8.1901 5.7922)" d="m60.581 47.06c-0.1487-0.0827-0.25528-6.7176-0.10931-6.8051 0.14597-0.08743 5.9453 3.1377 5.948 3.3079 0.0027 0.17013-5.69 3.5799-5.8387 3.4972z" fill="#d3d3d3" stop-color="#000000"/>
                    </g>
                </g>
            </svg>
        {/if}
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

        svg {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 10%;
            margin: auto;
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
