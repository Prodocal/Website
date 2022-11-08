<script>
    import KBIcon from "../../components/img/kbicon.jpg";
</script>

<main>
    <div class="md:flex md:justify-center mb-6 mt-10">
        <div class="card bg-base-100 shadow-xl w-9/12 ">
            <div class="card-body bg-gradient-to-r from-[#FAE1A7] to-[#FFAB9F]">
            <h1 class="text-[#31302e] text-3xl text-left pl-6 font-extrabold">Profile & Settings</h1>
                <div class="card card-side m-5 bg-white hover:shadow-xl">
                    <img class="ml-10 w-15 mask mask-circle" src={KBIcon} alt="ERR" width="130"/>
                    
                    <div class="items-center text-2xl pl-5 pt-20">Kamil Baycora</div>
                    
                    <div class="card-body justify-end">
                        <button class="btn">Change Image</button>
                        <button class="btn">Change Name</button>
                        <button class="btn">View Org/Friends</button>
                    </div>
        
                </div>

            </div>
        </div>
    </div>
</main>
