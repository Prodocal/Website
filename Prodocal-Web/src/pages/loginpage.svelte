<script>
    import Login from "../components/login.svelte";
    import Signup from "../components/signup.svelte";
</script>

<main>
    <div class="left">

    </div>
    <div class="right">
        <div class="card w-96 bg-base-100 shadow-xl  items-center text-center">
            <!-- <Login/> -->
            <Signup/>
        </div>
    </div>
</main>
<style>
    main{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main > .left{
        height: 100vh;
        width: 50vw;
        background-color: aqua;
    }
    main > .right{
        height: 100vh;
        width: 50vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>