<script lang="ts">
    import { fade, slide } from 'svelte/transition'
    import { base } from '$app/paths';

    let menuOpen: boolean = false;
</script>

<nav class="container-fluid nav">
    <a href="{base}/" class="secondary">
        {#if menuOpen === false}
            <svg class="logo" height="100%" transition:fade="{{delay: 250, duration: 300}}" aria-label="Go to the main page" version="1.1" viewBox="0 0 18.521 18.521" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="linearGradient1079" x1="-1.087" x2="16.403" y1="-17.256" y2="-1.0563" gradientUnits="userSpaceOnUse"><stop stop-color="#035560" offset="0"/><stop stop-color="#00d593" offset="1"/></linearGradient><linearGradient id="linearGradient1172" x1="-3.0988" x2="15.422" y1="-19.221" y2="-.7" gradientUnits="userSpaceOnUse"><stop stop-color="#016867" offset="0"/><stop stop-color="#00c087" offset=".24286"/><stop stop-color="#016867" offset=".62698"/><stop stop-color="#3d7a5c" offset="1"/></linearGradient></defs><g transform="translate(3.0988 19.221)" fill="url(#linearGradient1079)"><path d="m-3.0988-19.221v18.521h18.521c-1.67e-4 -1.6667e-4 0-18.521 0-18.521zm2.0118 1.9653h14.552l-1.7471 1.7389h-8.4667v1.5875l3.9688 4.4979-1.67e-5 -3.4396 1.0584 1.0583 1.67e-5 3.175 4.6575 5.9341h-2.1167l-9.42-11.226 1.67e-5 -1.5872s-2.4734-1.7304-2.4861-1.7389zm0 1.0583 1.5875 1.0583v11.113h6.35l-4.1285-4.8762v2.6458h1.0583l1.3229 1.3229h-3.7042v-7.6729l8.3618 9.903-10.903 0.038757zm5.6611 1.4743 6.0854-1.7e-5 -1.3229 1.0583-2.9104 5e-5 1.67e-5 1.8521-1.8521-2.1168z" fill="url(#linearGradient1172)" stop-color="#000000" stroke-width="0"/></g></svg>
        {/if}
    </a>
    <ul>
        <li class="links">
            <a href="{base}/legacy" role="button" class="outline">Legacy</a>
            <a href="{base}/rules" role="button" class="outline">Rules</a>
            <a href="{base}/events" role="button" class="outline">Events</a>
            <a href="{base}/about" role="button" class="outline">Contacts</a>
        </li>
        <li id="button-container">
            <button class="btn large" aria-label="Open the menu" on:click="{() => menuOpen = !menuOpen}">
                {#if menuOpen === false}
                    <svg class="change" transition:slide="{{delay: 250, duration: 150}}" height="20px" version="1.1" viewBox="0 0 28.751 18.52" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-6.2186 23.222)"><g fill="#fff" stroke-width="0"><rect x="6.2186" y="-23.222" width="22.6" height="2.0724" stop-color="#000000"/><rect x="6.2186" y="-14.998" width="28.751" height="2.0724" stop-color="#000000"/><rect x="6.2186" y="-6.7742" width="18.554" height="2.0724" stop-color="#000000"/></g></g></svg>
                {:else}
                    <svg class="change" transition:slide="{{delay: 250, duration: 150}}" height="20px" version="1.1" viewBox="0 0 28.751 18.521" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-25.088 -26.69)"><path d="m30.203 28.242 1.5524-1.5524 7.7079 7.7081 7.7081-7.7081 1.5524 1.5524-7.7079 7.7081 7.7079 7.7079-1.5524 1.5524-7.7081-7.7079-7.7079 7.7079-1.5524-1.5524 7.7079-7.7079z" fill="#fff" stop-color="#000000" stroke-width="0"/></g></svg>
                {/if}
            </button>
        </li>
    </ul>
    {#if menuOpen === true}
        <div class="menu" transition:fade="{{delay: 250, duration: 300}}">
            <ul>
                <li>
                    <a href="{base}/legacy" role="button" class="outline">Legacy</a>
                    <a href="{base}/rules" role="button" class="outline">Rules</a>
                    <a href="{base}/events" role="button" class="outline">Events</a>
                    <a href="{base}/about" role="button" class="outline">Contacts</a>
                </li>
            </ul>
        </div>
    {/if}
</nav>
<button class="btn small" aria-label="Open the menu" on:click="{() => menuOpen = !menuOpen}">
    {#if menuOpen === false}
        <svg class="change" transition:slide="{{delay: 250, duration: 150}}" height="20px" version="1.1" viewBox="0 0 28.751 18.52" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-6.2186 23.222)"><g fill="#fff" stroke-width="0"><rect x="6.2186" y="-23.222" width="22.6" height="2.0724" stop-color="#000000"/><rect x="6.2186" y="-14.998" width="28.751" height="2.0724" stop-color="#000000"/><rect x="6.2186" y="-6.7742" width="18.554" height="2.0724" stop-color="#000000"/></g></g></svg>
    {:else}
        <svg class="change" transition:slide="{{delay: 250, duration: 150}}" height="20px" version="1.1" viewBox="0 0 28.751 18.521" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-25.088 -26.69)"><path d="m30.203 28.242 1.5524-1.5524 7.7079 7.7081 7.7081-7.7081 1.5524 1.5524-7.7079 7.7081 7.7079 7.7079-1.5524 1.5524-7.7081-7.7079-7.7079 7.7079-1.5524-1.5524 7.7079-7.7079z" fill="#fff" stop-color="#000000" stroke-width="0"/></g></svg>
    {/if}
</button>

<style lang="scss">
    .logo {
        opacity: 75%;
    }

    .change {
        path {
            fill: var(--primary);
        }

        g {
            fill: var(--primary);
        }
    }

    .btn {
        background: var(--card-sectionning-background-color);
    }

    button {
        padding: 5px;
        width: fit-content;
        height: fit-content;
        margin: 0;
    }

    .nav::before {
        content: "";
        height: calc(100% + 1rem);
        width: 100%;
        position: absolute;
        z-index: -1;
        backdrop-filter: blur(0.25rem);
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }

    .nav {
        position: sticky;
        top: 0;
        padding-left: 0;
        z-index: 1;
        user-select: none;

        .links {
            a {
                margin-left: 0.05rem;
                margin-right: 0.05rem;
            }
        }


        .menu {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            white-space: nowrap;
            height: 100%;

            ul {
                margin-left: var(--space);
            }
        }

        @media screen and (min-width: 1025px) {
            button {
                display: none;
            }

            .menu {
                display: none;
            }
        }

        @media screen and (max-width: 1024px) {
            .links {
                display: none;
            }

            @media screen and (max-width: 380px) {
                .menu {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .large {
                    display: none;
                }
            }
        }
    }

    @media screen and (min-width: 1025px) {
        .small {
            display: none;
        }
    }

    @media screen and (max-width: 1024px) {
        .small {
            display: none;
        }

        @media screen and (max-width: 380px) {
            .small {
                display: block;
                position: fixed;
                bottom: 15px;
                right: 15px;
                z-index: 2;
            }
        }
    }

</style>
