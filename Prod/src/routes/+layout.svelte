<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import { page } from '$app/stores';
</script>

<body data-theme="light" class="bg-gradient-to-br from-[#FAE1A7] to-[#FFAB9F]">
    {#if $page.url.pathname !== '/'}
        <Navbar/>
    {/if}

    <slot></slot>
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



