
<script>
    import Users from "./lib/users.svelte";
</script>

<main>
    <div class="md:flex md:justify-center mb-6 mt-10">
        <div class="card bg-base-100 shadow-xl w-9/12 ">
            <div class="card-body bg-gradient-to-r from-[#FAE1A7] to-[#FFAB9F]">
            <h1 class="text-[#31302e] text-3xl text-left pl-6 font-extrabold">Your Friends & Organizations</h1>
            <Users />
            </div>
        </div>
    </div>
</main>