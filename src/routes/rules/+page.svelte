<svelte:head>
    <title>LA FEST 2023 - Rules</title>
</svelte:head>

<main class="container">
    <div class="box">
        <header>
            <h1 class="bg-grad">Rules</h1>
        </header>
        <div class="rules">
            <div class="text-border"><p>The last date for submitting the completed forms is 15<sup>th</sup> June 2023.</p></div>
            <div class="text-border"><p>Registration is free for all schools. All students from classes IX to XII are eligible to participate. The reporting time is 7:30 am.</p></div>
            <div class="text-border"><p>Each school is expected to participate in at least three events.</p></div>
            <div class="text-border"><p>A student cannot participate in more than two events.</p></div>
            <div class="text-border"><p>The maximum number of non-participants from a school is fifty.</p></div>
            <div class="text-border"><p>All participants and non-participants should be in their respective school uniforms.</p></div>
            <div class="text-border"><p>LA Fest badges will be distributed at the registration desk. All participants and non-participants must wear their badges throughout the fest.</p></div>
            <div class="text-border"><p>Two green rooms will be provided for each school.</p></div>
            <div class="text-border"><p>The cost of a food coupon is <i class="material-icons">currency_rupee</i>300, Booking of food coupons close on 25<sup>th</sup> June 2023. Cancellation of booking is not allowed.</p></div>
            <div class="text-border"><p>Vulgarity or obscenity in language or actions will lead to disqualification.</p></div>
            <div class="text-border"><p>Food and beverages are not allowed in the indoor stadium.</p></div>
            <div class="text-border"><p>Participating schools are expected to cooperate with the organisers and maintain a spirit of healthy competition.</p></div>
            <div><p>The decision of the judges will be final.</p></div>
        </div>
    </div>
</main>

<style lang="scss">
    .bg-grad {
        font-size: 2rem;
        background-image: linear-gradient(to bottom right, seaGreen 0%, seaGreen 25%, aqua 75%);
        background-clip: text;
        margin-bottom: 0;
        color: transparent;
    }

    .material-icons {
        margin: 0;
        padding: 0;
        font-size: 0.9rem;
        vertical-align: -2px;
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
