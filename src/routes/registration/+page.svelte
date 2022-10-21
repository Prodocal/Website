<main id="pink_background">
  <div id="main_card">
    <div class="card w-96 glass text-primary-content">
      <div class="card-body items-center">
        <h2 class="card-title">Account Registration</h2>

        <div class="form-control w-full max-w-xs">
          <div class="card-actions justify-start">  
            <p>Username:</p>
            <input type="text" placeholder="Type your username" class="input w-full max-w-xs" />
          </div>

          <div class="card-actions justify-start">
            <p>Email Address:</p>
            <input type="text" placeholder="Type your email address" class="input w-full max-w-xs" />
          </div>

          <div class="card-actions justify-start">
            <p>Password:</p>
            <input type="text" placeholder="Type your password" class="input w-full max-w-xs" />
            <input type="text" placeholder="Retype your password" class="input w-full max-w-xs" />
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-ghost">Create Account</button>
        </div>

      </div>
    </div>
  </div>
</main>


<style>

  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #main_card {
    left: 200px;
    /*opacity: .8;*/
  }

  p, h2 {
    font-family: 'Inter', sans-serif;
  }

  p {
    font-weight: 700;
  }

  #pink_background {
        background-image: url('../background/pink_image.png');
        background-size: cover;
  }

</style>