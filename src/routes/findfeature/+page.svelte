
<script>
    import Users from "/lib/users.svelte";
</script>

<main>
    <div class="md:flex md:justify-center mb-6">
        <div class="card w-9/12">
            <div class="card-body">
                <div class="relative">
                    <input type="search" id="default-search" class="block p-4 pl-10 w-full text-lg text-[#FF899C] rounded-xl border-2 border-[#FF899C] placeholder-[#FF899C] hover:shadow-xl" placeholder="Find Friends & Organizations..." required>
                </div>
            </div>
        </div>
    </div>

    <div class="md:flex md:justify-center mb-6">
        <div class="card bg-base-100 shadow-xl w-9/12 ">
            <div class="card-body bg-gradient-to-r from-[#FFC99F] to-[#FF899C]">
            <h1 class="text-white text-3xl text-left pl-6 font-extrabold">Recommended</h1>
            <Users />
            </div>
        </div>
    </div>
</main>