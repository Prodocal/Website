<script>
    import "../app.postcss";
    import Navbar from "$lib/components/Navbar.svelte";
    import { page } from '$app/stores';
    import navPub from "$lib/components/navPub.svelte";
	import NavPub from "$lib/components/navPub.svelte";
</script>

<body data-theme="autumn">
    {#if $page.url.pathname !== '/' && $page.url.pathname !== '/register'}
        <Navbar/>
    {:else}
        <NavPub/>
    {/if}

    <slot/>
</body>

<style>
    body{
    width: 100vw;
    height: 100%;
    font-family: 'Inter', sans-serif;
    color: #1c1c1cc2;
    font-weight: 800;
    /* overflow: hidden; */
    }
</style>