<script lang="ts">
    import '@picocss/pico';

    import Navbar from '$lib/interface/navbar.svelte';
    import '../app.css';
</script>

<Navbar/>

<slot/>

<style lang="scss" global>
    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    h3 {
        margin-bottom: var(--spacing);
    }

    b {
        font-weight: 600;
    }
</style>
