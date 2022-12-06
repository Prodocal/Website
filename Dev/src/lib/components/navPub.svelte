<script>
    import PDLogo from "$lib/assets/logo.svg";
</script>

<main>
    <div class="navbar pb-3 backdrop-blur bg-glass w-full shadow-xl" id="navbar">
        <div class="navbar-start">
            <a class="w-12 h-12 btn btn-ghost btn-square ml-5" href="/"> 
                <img src={PDLogo} alt="ProdoCal"/>
            </a>
        </div>
        <div class="navbar-end flex">
            <a href="/" class="btn w-32 btn-square btn-ghost hover:btn-primary flex-1">
                Login
            </a>

            <a href="/register"  class="btn w-32 btn-square btn-ghost hover:btn-primary flex-1">
                SignUp
            </a>
        </div>
    </div>
</main>