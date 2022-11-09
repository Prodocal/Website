<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/'}
    <Navbar/>
{/if}

<slot/>

