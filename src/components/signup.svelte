<script>
    let email = ""

    function emailprint() {
        console.log(email)
    }
</script>


<main>
    <div class="card-body items-center text-center">
        <div class="card-title">Sign Up</div>
        <input type="text" placeholder="Username/Email" class="input input-bordered input-primary w-full max-w-xs" bind:value={email}/>
        <input type="text" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Confirm Password" class="input input-bordered input-primary w-full max-w-xs" />
        <div class="card-actions justify-end">
            <button class="btn" on:click={emailprint}>Submit</button>
        </div>
    </div>
</main>
