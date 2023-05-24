<svelte:head>
    <title>LAFEST 2023 - Rules</title>
</svelte:head>

<main class="container">
    <article>
        <header>
            <hgroup>
                <h1 class="bg-grad">Rules</h1>
                <h2>Rules are meant to be broken! Oh wait… wrong context.</h2>
            </hgroup>
        </header>
        <div class="rules">
            <div class="text-border"><p>The last date for submitting the completed forms is 15th June 2023.</p></div>
            <div class="text-border"><p>Registration is free for all schools. All students from classes IX to XII are eligible to participate. The reporting time is 7:30 am.</p></div>
            <div class="text-border"><p>Each school is expected to participate in a least three events.</p></div>
            <div class="text-border"><p>A student cannot participate in more than two events.</p></div>
            <div class="text-border"><p>The maximum number of non-participants from a school is fifty.</p></div>
            <div class="text-border"><p>All participants and non-participants should be in their respective school uniforms.</p></div>
            <div class="text-border"><p>LA Fest badges will be distributed at the registration desk. All participants and non-participants must wear their badges throughout the fest.</p></div>
            <div class="text-border"><p>Two green rooms will be provided for each school.</p></div>
            <div class="text-border"><p>The cost of a food coupon is Rs. 300, Booking of food coupons close on the 25 June 2023. Cancellation of booking is not allowed.</p></div>
            <div class="text-border"><p>Vulgarity or obscenity in language or actions will lead to disqualitification.</p></div>
            <div class="text-border"><p>Food and beverages are not allowed in the indoor stadium.</p></div>
            <div class="text-border"><p>Participating schools are expected to cooperate with the organisers and maintain a spirit of healthy competition.</p></div>
            <div><p>The decision of the judges will be final.</p></div>
        </div>
        <footer>
            <div class="info">
                <span class="material-icons">info</span><i>No seriously, don't break the rules</i>
            </div>
        </footer>
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
</style>
