<script>
    // <script> is used to embed executable code or data. Usually refers to Javascript code. 
    // based off of https://www.w3schools.com/howto/howto_css_calendar.asp
    
    import Create from "$lib/components/Create.svelte";

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

    <ul id="weekdays">
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
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

    /* Month header */
    #month {
    padding: 25px 25px;
    width: 100%;
    /* background-image: url('../background/pink_image.png'); */
    background-size: cover;
    text-align: center;
    }

    #create_event {
        padding: 10px 0px;
        width: 100%;
        text-align: center;
    }

    /* Month list */
    #month ul {
    margin: 0;
    padding: 0;
    }

    #month ul li {
    color: black;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    }

    /* Previous button inside month header */
    #month .prev {
    float: left;
    padding-top: 10px;
    cursor: pointer;
    }

    /* Next button */
    #month .next {
    float: right;
    padding-top: 10px;
    cursor: pointer;
    
    }

    /* Weekdays (Mon-Sun) */
    #weekdays {
    margin: 0;
    padding: 10px 0;
    background-color:rgb(75, 74, 74);
    }

    #weekdays li {
    display: inline-block;
    width: 13.6%;
    color: #ffffff;
    text-align: center;
    }

    /* Days (1-31) */
    #days {
    padding: 10px 0;
    background: rgb(255, 255, 255);
    margin: 0;
    }

    #days li {
    list-style-type: none;
    display: inline-block;
    border: 1px solid black;
    padding: 40px;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:13px;
    color: rgb(0, 0, 0);
    }

    /* Highlight the "current" day */
    .active {
    padding: 5px;
    background: #fda3956e;
    color: rgb(0, 0, 0) !important
    }

</style>