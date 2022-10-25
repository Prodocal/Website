<script>
    import Logform from "./components/Logform.svelte";
    import Logo from "../../src/routes/components/img/logo.svg";
</script>

<main>
    <body class="min-h-screen bg-white">
        <div class="flex justify-center m-4">
            <div class="card shadow-xl px-3/6">
                <div class="card-body bg-gradient-to-r from-[#FAE1A7] to-[#FFAB9F]">
                    <img class="m-4" src={Logo} alt="ProdoCal" width="100"/>
                    ProdoCal
                    <div class="">
                        <Logform/>
                    </div>
                </div>
            </div>
        </div>
    </body>
</main>


<!-- <style>
    main {
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>  -->