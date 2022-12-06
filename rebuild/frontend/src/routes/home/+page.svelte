<script>
    import Calendar from "$lib/components/calendar.svelte"

    let cal_ref;
    let selected_event = {};
    let showInfoModal = false;

    // HMMMMMMMM
    function ToggleInfoModal()
    {
        showInfoModal = !showInfoModal;
    }

    // This function will show the event info modal
    function ShowEventInfo(info)
    {
        selected_event = info.detail.event;
        // console.log(selected_event);
        ToggleInfoModal();
    }

    // Removes the event from the calendar/db and closes the info modal
    function RemoveEvent()
    {
        cal_ref.RemoveEvent(selected_event.id);
        ToggleInfoModal();
        close();
    }

</script>

<main class="flex">
    <ul class="menu w-[20vw] h-[92vh] bg-base-200 flex items-center">
        <button class="btn btn-success">Create Event</button>
    </ul>

    <div class=" card w-[80vw] h-[92vh] bg-base-100 flex justify-center items-center">
            <div class="card-body">
                <Calendar bind:this={cal_ref} on:eventclick={ShowEventInfo}/>
            </div>
    </div>

    <!-- The EventInfo modal -->
    <div>
        {#if showInfoModal} 
            <div for="modal-box" class="modal modal-open"> 
                <div class="modal-box">
                    
                        <h3 class="font-bold text-lg"> {selected_event.title} </h3>

                        <p class="py-4"> Start Date: {selected_event.start}</p>
                        <p class="py-4"> End Date: {selected_event.end}</p>
                        
                        <div class="modal-action">
                            <button for="modal-box" on:click={ToggleInfoModal}>Close</button>
                        </div>

                        <div class="modal-action">
                            <button for="modal-box" on:click={RemoveEvent}> Delete Event</button>
                        </div>
                </div>    
            </div>         
        {/if}
    </div>


</main>