<script>
    import UsernameIcon from "$lib/assets/username.svg";
    import PasswordIcon from "$lib/assets/password.svg";
    import EmailIcon from "$lib/assets/email.svg";
    import PhoneIcon from "$lib/assets/phonenumber.svg";
    import Logo from "$lib/assets/logo.svg";
</script>

<main class="flex justify-center pt-10">
    <div class="card w-96 bg-base-200">
        <div class="card-body items-center text-center">
            <img class="mt-1" src={Logo} alt="ProdoCal" width="100"/>
        </div>

        <div class="card-body items-center text-center">
            <form  action="?/login" method="POST" class="form-control w-full max-w-xs">
                <div class="card-body">
                    <div class="card-actions justify-start">
                        <input type="text" name="username" placeholder="username" class="bg-white input w-full text-primary-focus max-w-xs rounded-full mb-2 shadow-xl placeholder-primary pl-11"/>
                        <img src={UsernameIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start">
                        <input type="password" name="password" placeholder="password" class="bg-white input w-full text-primary-focus max-w-xs rounded-full mb-2 shadow-xl placeholder-primary pl-11"/>
                        <img src={PasswordIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>
                    <div class="card-actions justify-center">
                        <p>New user? Signup <a href="/signup" class="text-primary hover:text-accent">here</a>!</p>
                    </div>
                    <div class="card-actions justify-center">
                        <button type="submit" class="text-primary text-lg bg-white hover:text-accent-focus rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl">
                            login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>