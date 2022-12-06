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
    let daysThisMonth = [
        1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,
    ]

    let date = new Date();
    let month = date.toLocaleDateString('en-US', {month: 'long'})
    let year = date.getFullYear();
</script>

<main class="flex flex-col justify-center items-center">
    <div class="navbar bg-base-200 mb-5 flex justify-center items-center">
        <div class="flex-1 w-5 btn btn-ghost">
            prev
        </div>
        
        <h1 class="flex-2 text-2xl text-bold">
            {month}
        </h1>

        <div class="flex-1 btn w-5 btn-ghost">
            next
        </div>
    </div>

    <!-- days of the week -->
    <div class="grid grid-cols-7 grid-rows-1 gap-2 pb-5">
        {#each days as day}
        <div class='card w-[10vw] bg-base-200 flex items-center justify-center'>{day}</div>
        {/each}
    </div>

    <!-- days in the month -->
    <div class="grid grid-cols-7 grid-rows-5 gap-2">
        {#each daysThisMonth as day}
            <div class='card w-[10vw] h-36 bg-base-200 flex items-center justify-center'>{day}</div>
        {/each}
    </div>

</main>