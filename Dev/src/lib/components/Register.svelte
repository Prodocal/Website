<script>
    import {goto} from '$app/navigation';
    import UsernameIcon from "$lib/assets/username.svg";
    import PasswordIcon from "$lib/assets/password.svg";
    import EmailIcon from "$lib/assets/email.svg";
    import PhoneIcon from "$lib/assets/phonenumber.svg";
    import {user, validateLogin, newUser} from "$lib/ApiJS/data.utils.js";
</script>


<main>
    <div class="card w-96">
        <div class="card-body items-center text-center">
            <div class="bg-white rounded-full px-5 py-.5 text-center mt-2 shadow-xl">
                <div class="tabs tabs-bordered">
                    <button class="tab text-[#FFAB9F] text-opacity-50 text-m">
                        <a href="/" class="font-extrabold">Login</a>
                    </button>
                </div>
            </div>

            <!-- signup -->
            <form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
                <div class="card-body">
                    <div class="card-actions justify-start mb-2">
                        <input type="text" name="name" placeholder="username" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11"/>
                        <img src={UsernameIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                        <!--<input type="text" name = "lname" placeholder="last name" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl"/>-->
                    </div>
                    <div class="card-actions justify-start mb-2">
                        <input type="email" name="email" placeholder="email" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11"/>
                        <img src={EmailIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>
                    <!--<div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="phone number" class="input w-full max-w-xs bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11" bind:value={obj.phone}/>
                        <img src={PhoneIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="text" placeholder="username" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.username}/>
                        <img src={UsernameIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>-->

                    <div class="card-actions justify-start">
                        <input type="password" name = "password" placeholder="password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="password" name = "passwordConfirm" placeholder="re-enter password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-center">
                        <button type="submit" class="text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl">
                            <a href="/" class="font-extrabold">Register</a>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>
