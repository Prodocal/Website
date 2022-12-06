<script>
  import "../app.postcss";
  import NavPub from "$lib/components/navPub.svelte";
  import NavPriv from "../lib/components/navPriv.svelte";
  import { page } from '$app/stores';
</script>

<body data-theme="autumn" class="overflow-hidden">
  {#if $page.url.pathname !== '/' && $page.url.pathname !== '/login' && $page.url.pathname !== '/signup'}
    <NavPriv/>
  {:else}
    <NavPub/>
  {/if}
  
  <slot/>
</body>

<style>
  body {
    width: 100vw;
    height: 100vh;
  }
</style>