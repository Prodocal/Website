<script>
    let tabs = [
        "Login",
        "Signup",
    ];
    let activeTab = 1;
    var username = "";
    var password = "";

    function validateLogin(username, password){
        let obj ={
            "users":{
                "username": username,
                "password": password,
            },
        };
        console.log(obj);
    }
</script>

<main>
    <div class="card w-96 glass">
        <div class="card-body  items-center text-center">
            <div class="tabs tabs-boxed">
                {#each tabs as tab, index}
                    <button class="tab" class:tab-active={activeTab == index} on:click={()=>activeTab = index}>{tab}</button>
                {/each}
            </div>

            <!-- login -->
            <div class="card-body" class:hidden={activeTab != 0}>
                <form class="form-control w-full max-w-xs" on:submit|preventDefault={validateLogin(username, password)}>
                    <div class="card-actions justify-start">  
                        <p></p>
                        <input type="text" placeholder="username" class="input w-full max-w-xs" bind:value={username}/>
                    </div>

                    <div class="card-actions justify-start">
                        <p></p>
                        <input type="text" placeholder="password" class="input w-full max-w-xs" bind:value={password}/>
                        <p></p>
                    </div>

                    <div class="card-actions">
                        <button type= "submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>

            <!-- signup -->
            <div class="card-body" class:hidden={activeTab != 1}>
                <div class="form-control w-full max-w-xs">
                    <p>Basic Info</p>
                    <div class="card-actions justify-start">
                        <input type="text" placeholder="First Name" class="input w-full max-w-xs flex-1" />
                        <input type="text" placeholder="Last Name" class="input w-full max-w-xs flex-1" />
                    </div>
                    <div class="card-actions justify-start">
                        <p></p>
                        <input type="text" placeholder="Email" class="input w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" class="input w-full max-w-xs" />
                    </div>

                    <p>Create Account</p>
                    <div class="card-actions justify-start">
                        <input type="text" placeholder="Username" class="input w-full max-w-xs" />
                    </div>
                    <div class="card-actions justify-start">  
                        <p></p>
                        <input type="text" placeholder="Type your username" class="input w-full max-w-xs"/>
                    </div>
                    <div class="card-actions justify-start">
                        <p></p>
                        <input type="text" placeholder="password" class="input w-full max-w-xs" />
                        <input type="text" placeholder="re-enter password" class="input w-full max-w-xs" />
                        <p></p>
                    </div>
                    <div class="card-actions">
                        <p></p>
                        <button class="btn btn-primary">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    main{
        color: aliceblue;
    }
</style>