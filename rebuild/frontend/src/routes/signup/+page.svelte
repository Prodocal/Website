<script>
    import UsernameIcon from "$lib/assets/username.svg";
    import PasswordIcon from "$lib/assets/password.svg";
    import EmailIcon from "$lib/assets/email.svg";
    import PhoneIcon from "$lib/assets/phonenumber.svg";
    import Logo from "$lib/assets/logo.svg";

    
</script>

<main class="flex justify-center pt-0">
    <div class="card w-96">
        <div class="card-body items-center text-center">
            <img class="mt-12" src={Logo} alt="ProdoCal" width="100"/>
        </div>
        <div class="card-body items-center text-center">
            <form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full">
                <div class="card-body">
                    <div class="card-actions justify-start mb-2">
                        <input type="text" name="username" placeholder="username" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11"/>
                        <img src={UsernameIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>
                    <div class="card-actions justify-start mb-2">
                        <input type="email" name="email" placeholder="email" class="input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11"/>
                        <img src={EmailIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="password" name = "password" placeholder="password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="password" name = "passwordConfirm" placeholder="re-enter password" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>
                    <div class="card-actions justify-center">
                        <p>Already Registered? Login <a href="/signup" class="text-primary hover:text-accent">here</a>!</p>
                    </div>
                    <div class="card-actions justify-center">
                        <button type="submit" class="text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl">
                            <a href="/login" class="font-extrabold">Register</a>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>