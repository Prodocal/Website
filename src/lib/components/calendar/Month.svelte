<script>
    let weekdays = ['Mon', 'Teu', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let months = [ "January", "February", "March", "April", "May", "June", "July",  
    "August", "September", "October", "November", "December" ];   


    // to get current date
    const date = new Date(); 

    const today = {
        dayNum: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    }

    let year = date.getFullYear();
    let curMonth = date.getMonth();

    $: month = months[curMonth];
    $: firstday = new Date(year, curMonth, 1).getDay();
    $: numdays = new Date(year, curMonth+1, 0).getDate();
    $: lastMonthDays = new Date(year, curMonth, 0).getDate();
    $: cellQuantity = firstday <= 4 ? 35 : 42;

    const goPrevMonth = () => {
        if (curMonth <= 0){
            year--;
            return curMonth = 11;
        }

        return curMonth--;
    }
    const goNextMonth = () => {
        if (curMonth >= 11){
            year++;
            return curMonth = 0;
        }

        return curMonth++;
    }
</script>

<main>
    <div class="card-body max-w-[80vw]">
        <div id="month" class="flex flex-col">
            <ul>
                <button id="prev" on:click={goPrevMonth}>&#10094;</button>
                <button id="next" on:click={goNextMonth}>&#10095;</button>
                <li class="flex flex-col content-center"> 
                    {month} 
                    <span style="font-size:18px"> {year} </span>
                </li>
            </ul>
        </div>


        <ul id="weekdays">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
        </ul>

        <ul id="days">
            {#each Array(cellQuantity) as _, i}
                {#if i < firstday}
                    <li style="color:gray;"> {(lastMonthDays - firstday+1) + i} </li>
                {:else if i >= numdays + firstday}
                    <li style="color:gray;"> {i - (numdays + firstday-1)} </li>
                {:else}
                    <li class:active={i === today.dayNum +(firstday-1) && today.month === curMonth && today.year === year}> {i - firstday+1}  </li> 
                {/if}
            {/each}
        </ul>
    </div>
</main>

<style> /* style tag is used to define style information. Specifys how HTML elements should render in main. */
    ul {list-style-type: none;}
    main {font-family: sans-serif, 'Trebuchet MS';}

    #create_event{
        padding: 10px 0px;
        width: 100%;
        text-align: center;
    }

    /* Month header style*/
    #month ul li{
        font-size: 30px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: rgb(60, 64, 67);
    }

    /* Months list */
    #month ul {
        margin: 0;
        padding: 0;
    }

    /* Next arrow in month header */
    #month #next{
        padding-top: 10px;
        cursor: pointer;
        float: right;
    }

    #month #prev{
        padding-top: 10px;
        cursor: pointer;
        float: left;
    }

    /*(Mon-Sun)*/
    #weekdays{
        margin: 0;
        padding: 10px 0;
        background-color:rgb(60, 64, 67);
    }

    /* Weekday style*/
    #weekdays li{
        display: inline-block;
        width: 13.2%;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    /* Day block (1-31)*/
    #days{
        padding: 10px;
        background: rgb(255, 255, 255);
        margin: 0;
    }

    /* Day style (1-31) */
    #days li{
        list-style-type: none;
        display: inline-block;
        border: 2px solid rgb(218, 220, 224);
        padding: 40px;
        width: 13.6%;
        text-align: center;
        margin-bottom: 5px;
        font-size: 13px;
        color: rgb(60, 64, 67);
    }

    /*Highlighs "current" day */
    .active{
        padding: 5px;
        color: rgb(255, 255, 255) !important;
        background: #FFAB9F;
    }

</style>