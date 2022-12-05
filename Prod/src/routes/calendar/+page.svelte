<script>
    import Create from "$lib/components/Create.svelte";
    import Calendar from "$lib/components/calendar.svelte";
    import { createEventDispatcher } from 'svelte';

    // Handle communication between the create event modal and the calendar on this page

    let cal;
    let create_event;
    
    let selectedEvent = {};
    let showModal = false;

    const dispatchRE = createEventDispatcher();

    function toggleModal() {
		showModal = !showModal;
        //console.log(selectedEvent.title);
	}

    function AddEvent(data)
    {
        if (cal != undefined) cal.pop_events(data.detail);
    }


    function PopEventModal(info){
        selectedEvent = info.detail.event;

        toggleModal();
        console.log(selectedEvent);
    }

    function RemoveEventModal(){
        console.log(selectedEvent.id);
        cal.removeEvent(selectedEvent.id);
        toggleModal();
        close();
    }
    
</script>

<main> 
    <div class="card card-side h-[85vh] shadow-xl backdrop-blur bg-white/50">
        
        <div id="create_button">
            <Create bind:this={create_event} on:make={AddEvent} />
        </div>
        
        <div id="calendar_format">
            <Calendar bind:this={cal} on:eventclick={PopEventModal}/>   
        </div> 

        <div>
            {#if showModal} 
                <!-- this is the event details panel -->
                <div for="modal-box" class="modal modal-open"> 
                    <div class="modal-box">
                        
                            <h3 class="font-bold text-lg"> {selectedEvent.title} </h3>

                            <p class="py-4"> Start Date: {selectedEvent.start}</p>
                            <p class="py-4"> End Date: {selectedEvent.end}</p>
                            
                            <div class="modal-action">
                                <button for="modal-box" on:click={toggleModal} >Close</button>
                            </div>

                            <div class="modal-action">
                                <button for="modal-box" on:click={RemoveEventModal}> Delete Event</button>
                            </div>
                    </div>    
                </div>         

            {/if}
            
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