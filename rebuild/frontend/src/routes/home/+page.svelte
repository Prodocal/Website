<script>
    import Calendar from "$lib/components/calendar.svelte"
    import DateTimeSelector from 'svelty-picker'
    import {HsvPicker} from 'svelte-color-picker'

    let cal_ref;
    let creation_input = {};
    let selected_event = {};
    let showInfoModal = false;
    let showCreationModal = false;

    // Callback function for the color picker
    function ColorSet(rgba)
    {
        let color = 'rgb(' + rgba.detail.r + ',' + rgba.detail.g + ',' + rgba.detail.b + ')';
        // console.log(color);
        creation_input.color = color;        
    }

    // HMMMMMMMM
    function ToggleInfoModal()
    {
        showInfoModal = !showInfoModal;
    }
    
    // HMMMMMMMM
    function ToggleCreationModal()
    {
        // Empty the user input object
        creation_input = {};

        showCreationModal = !showCreationModal;
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

    // This function will put the user's new event on the calendar and into the DB
    function AddEvent()
    {
        cal_ref.AddEvent(creation_input);
        ToggleCreationModal();
        // Not sure what this does
        close();
    }

</script>

<main class="flex">
    <ul class="menu w-[20vw] h-[92vh] bg-base-200 flex items-center pt-8">
        <button class="btn btn-success" on:click={ToggleCreationModal}>Create Event</button>
    </ul>

    <div class="card w-full bg-base-100 flex justify-center items-center">
            <div class="card-body w-full h-screen overflow-y-auto pb-24">
                <Calendar bind:this={cal_ref} on:eventclick={ShowEventInfo}/>
            </div>
    </div>

    <!-- The EventInfo modal -->
    <div>
        {#if showInfoModal} 
            <input type="checkbox" id="info_modal">
            <div for="modal-box" class="modal modal-open"> 
                <div class="modal-box">
                    <label for="info_modal" class="btn btn-sm btn-warning btn-circle absolute right-2 top-2" on:click={ToggleInfoModal}>✕</label>
                    
                    <h3 class="font-bold text-lg"> {selected_event.title} </h3>

                    <p class="py-4"> Start Date: {selected_event.start}</p>
                    <p class="py-4"> End Date: {selected_event.end}</p>

                    <div class="modal-action">
                        <button for="modal-box" class="btn btn-error" on:click={RemoveEvent}>Delete</button>
                    </div>
                </div>    
            </div>         
        {/if}
    </div>
    
    <!-- The Event Creation Modal -->
    <div>
        {#if showCreationModal} 
            <input type="checkbox" id="creation_modal">
            <div for="modal-box" class="modal modal-open"> 
                
                <form action="?/addEvent" method="POST">
                    <div class="modal-box">   
                        <label for="creation_modal" class="btn btn-sm btn-warning btn-circle absolute right-2 top-2" on:click={ToggleCreationModal}>✕</label>
                        <div class="form-control">
                            <div class="form-control p-2 pt-4"><input type="text" placeholder="Event Title" name="eventName" class="input input-bordered input-info w-full max-w-xs" bind:value={creation_input.title}/></div>
                            <div class="form-control p-2"><input type="text" placeholder="Organization (optional)" class="input input-bordered input-info w-full max-w-xs" bind:value={creation_input.organization}/></div>
                            <div class="form-control p-2"><input type="text" placeholder="Class (optional)" class="input input-bordered input-info w-full max-w-xs" bind:value={creation_input.class}/></div>

                            <!-- Start date selection -->
                            <label class="input-group input-group-md p-2">
                                <span>Event Start</span>
                                <DateTimeSelector  type="text" name="startDate" startDate={Date.now()} endDate={creation_input.end_date} format="yyyy-mm-dd hh:ii" bind:value={creation_input.start_date}></DateTimeSelector>
                            </label>

                            <!-- End date selection -->
                            <label class="input-group input-group-md p-2">
                                <span>Event End</span>
                                <DateTimeSelector type="text" name="endDate" startDate={creation_input.start_date} format="yyyy-mm-dd hh:ii" bind:value={creation_input.end_date}></DateTimeSelector>
                            </label>

                            <!-- <HsvPicker on:colorChange={ColorSet} startColor={"#ffcb82"}/> -->
                        </div>
                        <div class="modal-action">
                            <button type="submit" for="modal-box" class="btn btn-success">Create</button>
                        </div>
                    </div>  
                </form>
            </div>         
        {/if}
    </div>

</main>