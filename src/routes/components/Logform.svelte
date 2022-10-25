<script>
    let tabs = [
        "Login",
        "Signup",
    ];
    let activeTab = 0;
    var username, password, email, phone, firstname, lastname;

    function validateLogin(username, password){
        let obj ={
            "users":{
                "username": username,
                "password": password,
            },
        };
        console.log(obj);
    }

    function newUser(username, password, email, phone, firstname, lastname){
        let obj ={
            "users":{
                "username": username,
                "password": password,
                "email": email,
                "phone": phone,
                "First Name": firstname,
                "Last Name": lastname,
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
                        <button type="submit" class="btn btn-primary"><a href="/pages/calendar2">Login</a></button>
                    </div>
                </form>
            </div>

            <!-- signup -->
            <div class="card-body" class:hidden={activeTab != 1}>
                <form class="form-control w-full max-w-xs" on:submit|preventDefault={newUser(username, password, email, phone, firstname, lastname)}>
                    <p>Basic Info</p>
                    <div class="card-actions justify-start">
                        <input type="text" placeholder="First Name" class="input w-full max-w-xs flex-1" bind:value={firstname} />
                        <input type="text" placeholder="Last Name" class="input w-full max-w-xs flex-1" bind:value={lastname}/>
                    </div>
                    <div class="card-actions justify-start">
                        <p></p>
                        <input type="text" placeholder="Email" class="input w-full max-w-xs" bind:value={email}/>
                        <input type="text" placeholder="Phone Number" class="input w-full max-w-xs" bind:value={phone}/>
                    </div>

                    <p>Create Account</p>
                    <div class="card-actions justify-start">
                        <input type="text" placeholder="Username" class="input w-full max-w-xs" bind:value={username}/>
                    </div>
                    <div class="card-actions justify-start">
                        <p></p>
                        <input type="text" placeholder="password" class="input w-full max-w-xs" />
                        <input type="text" placeholder="re-enter password" class="input w-full max-w-xs" bind:value={password}/>
                        <p></p>
                    </div>
                    <div class="card-actions justify-center">
                        <p></p>
                        <button type="submit" class="btn btn-primary"><a href="/pages/calendar2">Signup</a></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>

<style>
    main{
        color: aliceblue;
    }
    p{
        color: black;
    }
</style>