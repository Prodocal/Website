<script>
    import {goto} from '$app/navigation';
    import {validateForm} from "$lib/ApiJS/logform.js";
    import UsernameIcon from "$lib/assets/username.svg";
    import PasswordIcon from "$lib/assets/password.svg";
    import EmailIcon from "$lib/assets/email.svg";
    import PhoneIcon from "$lib/assets/phonenumber.svg";
    import {user, validateLogin, newUser} from "$lib/ApiJS/data.utils.js";

    let tabs = [
        "Login",
        "Signup",
    ];

    let activeTab = 0;
    
    const obj = Object.create(user);
    let pass2 = "";

    function clearObj(obj){
        for (const key in obj) {
            delete obj[key];
        }
    }
</script>


<main>
    <div class="card w-96">
        <div class="card-body items-center text-center">
            <div class="bg-white rounded-full px-5 py-.5 text-center mt-2 shadow-xl">
                <div class="tabs tabs-bordered">
                    {#each tabs as tab, index}
                        <button class="tab text-[#FFAB9F] text-opacity-50 text-m" class:tab-active={activeTab == index} on:click={()=>activeTab = index} on:click={clearObj(obj)}>{tab}</button>
                    {/each}
                </div>
            </div>

            <!-- login -->
            <div class="card-body" class:hidden={activeTab != 0}>
                <form class="form-control w-full max-w-xs" on:submit|preventDefault={validateLogin(obj)}>
                    <div class="card-actions justify-start">
                        <input type="text" placeholder="username" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.username}/>
                        <img src={UsernameIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="text" placeholder="password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.password}/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-center">
                        <button type="submit" class="text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl">
                            <a href="/calendar" class="font-extrabold">Login</a>
                            <!-- <a class="font-extrabold"> LOGIN</a> -->
                            
                        </button>
                    </div>
                </form>
            </div>

            <!-- signup -->
            <div class="card-body" class:hidden={activeTab != 1}>
                <form class="form-control w-full max-w-xs" on:submit|preventDefault={newUser(obj)}>
                    <div class="card-actions justify-start mb-2">
                        <input type="text" placeholder="first name" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl" bind:value={obj.firstname} />
                        <input type="text" placeholder="last name" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl" bind:value={obj.lastname}/>
                    </div>
                    <div class="card-actions justify-start mb-2">
                        <input type="text" placeholder="email" class="input w-full max-w-xs bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11" bind:value={obj.email}/>
                        <img src={EmailIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>
                    <div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="phone number" class="input w-full max-w-xs bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11" bind:value={obj.phone}/>
                        <img src={PhoneIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="text" placeholder="username" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.username}/>
                        <img src={UsernameIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="text" placeholder="password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.password}/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="text" placeholder="re-enter password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={pass2}/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-center">
                        <button type="submit" class="text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl">
                            <a href="/calendar" class="font-extrabold" on:click|preventDefault={validateForm(obj, pass2)}>Signup</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>
