<script>
    import MonthView from "$lib/components/MonthView.svelte";
    import Month from "$lib/components/calendar/Month.svelte";
    import Create from "$lib/components/Create.svelte";
    import Calendar from "$lib/components/calendar.svelte";

    // Handle communication between the create event modal and the calendar on this page

    let cal;
    let create_event;

    function AddEvent(data)
    {
        console.log(data.detail.title);
        if (cal != undefined) cal.pop_events(data.detail);
    }
    
</script>

<main> 
    <div class="card card-side h-[85vh] shadow-xl backdrop-blur bg-white/50">
        
        <div id="create_button">
            <Create bind:this={create_event} on:make={AddEvent} />
        </div>
        
        <div id="calendar_format">
            <Calendar bind:this={cal}/>   
        </div> 
    
    </div>
    
</main>

<style>

    #create_button{
        position: relative;
        left: 60px;
        top: 100px;
    }

    #calendar_format{
        width: 70%;
        position: relative;
        align-items: center;
        justify-content: center;
        left: 150px;
        top: 50px;
        /*padding-bottom: calc(55%9/16);*/
    }

</style>