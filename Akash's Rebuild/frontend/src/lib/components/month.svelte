<script>
    let days = [
        'Sunday',
        'Monday',
        'Teusday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December",
    ];

    let now = new Date();
</script>

<main class="flex flex-col justify-center items-center">
    <div class="navbar bg-base-200 mb-5">
        <div class="btn btn-ghost">
            prev
        </div>
        Current Date
        <div class="btn btn-ghost">
            next
        </div>
    </div>
    <div class="grid grid-cols-7 grid-rows-4 gap-2">
        {#each days as day}
        <div class='card w-[10vw] bg-base-200 flex items-center justify-center'>{day}</div>
        {/each}
    </div>
    { now }

</main>