<script>
    import PDLogo from "./img/logo.svg";
    import UserIcon from "./img/usericon.svg";
</script>

<main>
    <div class="navbar rounded-2xl bg-gradient-to-r from-[#FAE1A7] to-[#FFAB9F]" id="navbar">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl" href="/findfeature"> 
                <img class="pl-1" src={PDLogo} alt="ProdoCal" width="25"/>
            </a>
        </div>

        <div class="flex-none gap-2">
            <nav>
                <a href="/login">login</a>
                <a href="/registration">registration</a>
                <a href="/create">create</a>
                <a href="/findfeature">findfeature</a>
                <a href="/calendar">calendar</a>
            </nav>
            
            <div class="dropdown dropdown-end">
                <label for="navbar" tabindex="-1" class="btn btn-ghost btn-circle avatar">
                    <img class="w-10" src={UserIcon} alt="AP">
                </label>

                <ul tabindex="-1" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                    <li><a href="/">Profile</a></li>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/login">Logout</a></li>
                </ul>
            </div>

        </div>
        
    </div>
</main>