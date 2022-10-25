
<script>
    import PDLogo from "./img/logo.svg";
    import KBIcon from "./img/kbicon.jpg";
    import PeopleIcon from "./img/peopleicon.svg";
</script>

<main>
    <div class="navbar rounded-2xl bg-gradient-to-r from-[#FAE1A7] to-[#FFAB9F] w-full shadow-xl" id="navbar">
        <div class="navbar-start">
            <a class="btn btn-ghost normal-case text-xl hover:fill-white" href="/pages/calendar2"> 
                <img class="pl-1" src={PDLogo} alt="ProdoCal" width="50"/>
            </a>
        </div>
        
        <div class="navbar-center">
            <input type="search" id="default-search" class="block p-2 pl-10 w-full text-[#31302e] rounded-xl placeholder-[#31302e]" placeholder="Hello..." required>
        </div>

        <div class="navbar-end">
            <nav>
                <a class="btn btn-ghost normal-case text-xl" href="/pages/findfeature"> 
                    <img class="pl-1" src={PeopleIcon} alt="Social" width="40"/>
                </a>
            </nav>
            
            <div class="dropdown dropdown-end">
                <label for="navbar" tabindex="-1" class="btn btn-ghost btn-circle avatar">
                    <img class="w-12 mask mask-circle" src={KBIcon} alt="AP">
                </label>

                <ul tabindex="-1" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                    <li><a href="/pages/settings">Profile & Settings</a></li>
                    <li><a href="/">Logout</a></li>
                    <li><a href="/pages/create">TEMP: create</a></li>
                    <li><a href="/pages/create_org">TEMP: create_org</a></li>
                </ul>
            </div>
        </div>
    </div>
</main>