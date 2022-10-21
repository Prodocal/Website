<html data-theme="dark"></html>

<div id="pink_background">
    <div id="divBox">
    
        <div class="card w-96 glass text-primary-content" id= "Alexyu">
        <div class="card-body">
        
        <h2 class="card-title" style='color: black;font-size: 35px;'> Welcome</h2>
        
        <h2 class="card-title" style='color: black;font-size: 35px;'>Back </h2>
        <br>

        <label class="label">
            <span class="label-text" style='color: black;'>Username</span>
        </label>
        <input type="text" placeholder="Type your username" class="input input-bordered w-full max-w-xs" />
        <label class="label"> </label>
    
        <label class="label">
            <span class="label-text" style='color: black;'>Password</span>
        </label>
        <input type="password" placeholder="Type your password" class="input input-bordered w-full max-w-xs" />
        <label class="label"> 
            <span class="label-text-alt"> <a class="link link-hover" href="/registration">Create account</a> </span>
            <span class="label-text-alt"> <a class="link link-hover">Forgot password?</a></span>
        </label>
        
        <br>
        <button class="btn" style="background-color:neutral;"> <a href="/calendar">Login</a> </button>
        
        </div>
        </div>
    </div>
</div>

<style>
    #divBox{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #pink_background{
        background-image: url('../background/pink_image.png');
        background-size: cover;
    }

    #Alexyu{
        opacity: 0.83;
    }

</style>



