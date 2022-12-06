<script>
    import PDLogo from "$lib/assets/logo.svg";
</script>

<main>
    <div class="navbar bg-base-200">
        <div class="flex-1">
            <a href="/home">
                <img src={PDLogo} alt="ProdoCal" class="btn btn-ghost"/>
            </a>
        </div>


        <div class="flex-none gap-2">
            <div class="form-control">
                <input type="text" placeholder="Search Events" class="input input-bordered" />
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>

                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                    <li>
                        <a href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>