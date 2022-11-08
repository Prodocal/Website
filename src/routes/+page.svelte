<script>
    import Logform from "./components/Logform.svelte";
    import Logo from "../../src/routes/components/img/logo.svg";
</script>

<main>
    <body class="flex items-center justify-center min-h-screen bg-white">
        <div>
            <div class="card grid place-items-center shadow-xl px-3/6 bg-gradient-to-bl from-[#FAE1A7] to-[#FFAB9F]">
                <img class="mt-12" src={Logo} alt="ProdoCal" width="100"/>
                 <Logform/>
            </div>
        </div>
    </body>
</main>
