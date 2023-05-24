<svelte:head>
    <title>LAFEST 2023 - About</title>
    <meta name="description" content="About us, the organisers of LAFEST">
</svelte:head>

<main class="container">
    <article>
        <header>
            <hgroup>
                <h1 class="bg-grad">About</h1>
                <h2>Who even am I?…</h2>
            </hgroup>
        </header>
        <p>Hey there! Welcome to the about page for the Media Team 2024, How has your day been?… Hmph, maybe asking you this on a static webpage isn't the most effective way to communicate not like the effective communication, but you know what is effective communication? this message to our spon-</p>
        <p>Sorry about that, got a bit carried away with the role there, we in the media team believe in the power of effective communication and the ability of media to shape and inspire our community. Our Media Team consists of talented and passionate individuals dedicated to delivering compelling narritives, either directly or indirectly, capturing memorable moments and of course keeping our fellow peers informed, like in the case of this website. By organising this year's LA Fest we hope to carry on with the once lost tradition of taking the baton held out by our previous batch and making sure that the light of this torch never goes out. We hope that when the day comes that all of you attend because we promise you, you will not regret it.</p>
        <p>Media Team member <b>[redacted]</b> signing out.</p>
        <p><b>[transmission cut]</b></p>
        <footer>
            <div class="info">
                <span class="material-icons">info</span><i>100% organic and student grown</i>
            </div>
        </footer>
    </article>
    <article>
        <details>
            <summary>Contacts</summary>
            <div class="members">
                <hgroup class="text-border">
                    <h5>General Coordinator</h5>
                    <h6>Adved Krishna A.S., +91 82811 70702</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Events Coordinator</h5>
                    <h6>Georgie Joban, +91 80892 11442</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Logistics Coordinator</h5>
                    <h6>Govardhan R., +91 94465 44995</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Enquesta</h5>
                    <h6>Joel Jobby Jacob, +91 94479 76650</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Harmony</h5>
                    <h6>Niranjan B. Kumar, +91 91882 62721</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Block N' Tangles</h5>
                    <h6>Navneeth V. Sanker, +91 94958 23690</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>La Persona</h5>
                    <h6>Madhav Pradeep, +91 97784 87168</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>L'attire</h5>
                    <h6>Don Roshan Thomas, +91 70125 73189</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>L'ebate</h5>
                    <h6>Matthew K. Mathen, +91 88484 08296</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Pitch 101</h5>
                    <h6>Devin Maheswar, +91 80755 13601</h6>
                </hgroup>
                <hgroup>
                    <h5>Dance O' Mania</h5>
                    <h6>Aadithyan K.A., +91 96336 44710</h6>
                </hgroup>
            </div>
        </details>
        <details>
            <summary>Dolor</summary>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <div class="members">
                <hgroup class="text-border">
                    <h5>Lorem ipsum</h5>
                    <h6>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Lorem ipsum</h5>
                    <h6>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h6>
                </hgroup>
                <hgroup class="text-border">
                    <h5>Lorem ipsum</h5>
                    <h6>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h6>
                </hgroup>
                <hgroup>
                    <h5>Lorem ipsum</h5>
                    <h6>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h6>
                </hgroup>
            </div>
        </details>
    </article>
</main>

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

    .container {
        padding-top: 0;
    }

    .members {
        border: solid 1px  var(--credit-border);
        border-radius: var(--border-radius);

        hgroup {
            padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
            margin-bottom: 0;
        }

        .text-border {
            border-bottom: solid 1px var(--credit-border);
        }
    }
</style>
