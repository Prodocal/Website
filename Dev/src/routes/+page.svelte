<script>
    import Login from "$lib/components/Login.svelte";
    import Logo from "$lib/assets/logo.svg";
    import Create from "$lib/components/Create.svelte";
</script>

<main>
    <body class="flex items-center justify-center min-h-screen bg-white">
        <div>
            <div class="card grid place-items-center shadow-xl px-3/6 bg-gradient-to-bl from-[#FAE1A7] to-[#FFAB9F]">
                <img class="mt-12" src={Logo} alt="ProdoCal" width="100"/>
                <Login/>
            </div>
        </div>
    </body>
</main>
