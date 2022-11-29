<script>
    import PDLogo from "$lib/assets/logo.svg";
    import KBIcon from "$lib/assets/kbicon.jpg";
    import PeopleIcon from "$lib/assets/peopleicon.svg";
    import SearchIcon from "$lib/assets/search.svg";

    var today = new Date();
    var time = today.getHours();
    var search_msg;

    if (time > 15) {
        search_msg = 'Good evening...';
    } else if (time > 11) {
        search_msg = 'Good afternoon...';
    } else if (time > 5) {
        search_msg = 'Good morning...'
    } else if (time >= 0) {
        search_msg = 'Early bird or night owl?';
    } else {
        search_msg = 'Hello...';
    }

</script>

<main>
    <div class="navbar pt-3 pb-3 rounded-full backdrop-blur bg-white/50 w-full shadow-xl" id="navbar">
        <div class="navbar-start">
            <a class="w-12 h-12 btn btn-ghost btn-square ml-5" href="/calendar"> 
                <img src={PDLogo} alt="ProdoCal"/>
            </a>
        </div>
        
        <div class="navbar-start">
            <input type="search" id="default-search" class="block pt-4 pb-4 pr-22 pl-12 w-full text-neutral text-lg rounded-full shadow-xl placeholder-neutral placeholder:italic" placeholder="{search_msg}" required>
            <img src={SearchIcon} class="absolute pl-2 w-11" alt="?">
        </div>

        <div class="navbar-end">
            <div class="dropdown dropdown-end">
                <label for="navbar" tabindex="-1" class="w-12 h-12 btn btn-ghost btn-circle avatar mr-5">
                    <div class="rounded-full">
                        <img src={KBIcon} alt="AP">
                    </div>
                </label>

                <ul tabindex="-1" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                    <li><a href="/settings">Profile & Settings</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</main>

<style>
    main{
        padding: 10px;
    }
</style>