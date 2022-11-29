<script>
    // <script> is used to embed executable code or data. Usually refers to Javascript code. 
    // based off of https://www.w3schools.com/howto/howto_css_calendar.asp
    
    import Create from "$lib/components/Create.svelte";
    import CalendarView from "$lib/components/CalendarView.svelte";

    const date = new Date(); // creates a Date object and represents the current date and time

    const today = { //makes an object called today and initializes the variables that describe today's date
        dayNum: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    }

    // initialize an array full of all months for later use
    // using the right and left arrows on the front page will move between months
    const listofMonths = [ "January", "February", "March", "April", "May", "June", "July",  
    "August", "September", "October", "November", "December" ];   
    
    let monthIndex = date.getMonth(); // .getMonth() returns the month number and acts as an index for our array

    // let allows you to declare variables 
    $: month = listofMonths[monthIndex]; // $: reactive symbol makes it update real time if we change the index
    let year = date.getFullYear();

    $: firstday = new Date(year, monthIndex, 1).getDay(); // gets the number on the calendar for what day is the first
    
    // 0 as the parameter gives the last day of last month, so to get the current month we +1 the month index
    $: numdays = new Date(year, monthIndex+1, 0).getDate(); // so this returns the number of days in the month

    $: lastMonthDays = new Date(year, monthIndex, 0).getDate();

    //let currentDay = date.getDate(); // gets the current day

    $: cellQuantity = firstday <= 4 ? 35 : 42; // if first day is or after thursday, then we need 42 cells since the days carry over.
    // if not, then we only need 35 to reduce extra row space

    const goPrevMonth = () => {
        if (monthIndex <= 0){
            year--;
            return monthIndex = 11;
        }

        return monthIndex--;
    }

    const goNextMonth = () => {
        if (monthIndex >= 11){
            year++;
            return monthIndex = 0;
        }

        return monthIndex++;
    }

    $: console.log(`${monthIndex} --- First Day Index: ${firstday}-- Number of Days: ${numdays} --- ${month} ${today.dayNum}`)

</script>

<main>

    <div id="month">
    <ul>
        <li class="prev" on:click={goPrevMonth}>&#10094;</li>
        <li class="next" on:click={goNextMonth}>&#10095;</li>
        <li> {month} <br><span style="font-size:18px"> {year} </span></li>
    </ul>
    </div>

    <div id="create_event">
        <Create/>
    </div>

    <div id="change_view">
        <CalendarView/>
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
                <li class:active={i === today.dayNum +(firstday-1) && today.month === monthIndex && today.year === year}> {i - firstday+1}  </li> 
            {/if}
        {/each}
    </ul>

</main>

<style> /* style tag is used to define style information. Specifys how HTML elements should render in main. */

    ul {list-style-type: none;}
    main {font-family: sans-serif, 'Trebuchet MS';}

    #create_event{
        padding: 10px 0px;
        width: 100%;
        text-align: center;
    }

    #change_view{
        padding: 10px 0px;
        width: 100%;
        text-align: right;
    }

    /* Month header */
    #month{
        padding: 25px 25px;
        width: 100%;
        text-align: center;
        background-size: cover;
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
    #month .next{
        padding-top: 10px;
        cursor: pointer;
        float: right;
    }

    #month .prev{
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