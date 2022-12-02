<script>
    import EventTitleIcon from "$lib/assets/title.svg";
    import OrgNameIcon from "$lib/assets/orgname.svg";
    import ClassNameIcon from "$lib/assets/classname.svg";
    import EventTypeIcon from "$lib/assets/eventtype.svg";
    import CalIcon from "$lib/assets/calendar.svg";
    import CalEndIcon from "$lib/assets/calendarend.svg";
    import ClockIcon from "$lib/assets/clock.svg";
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    // Start time of event
    const start_time = {
        hour: undefined,
        min: undefined,
        ampm: undefined
    };
    
    // End time of event
    const end_time = {
        hour: undefined,
        min: undefined,
        ampm: undefined
    };

    // Object passed to the calendar
    const obj = {
        title: undefined,
        organization: undefined,
        class: undefined,
        type: undefined,
        datestart: undefined,
        dateend: undefined,
    };

    
    // const addEvent = new CustomEvent('create_event', {
    //     detail: obj,
    //     bubbles: true,
    //     cancelable: false,
    //     composed: false
    // });

    function clearObj(obj) {
        for (const key in obj) {
            delete obj[key];
        }
    }

    function form_submit(){
        

        start_time.hour = ((start_time.ampm == "AM") ? start_time.hour : parseInt(start_time.hour) + 12)
        obj.datestart += "T"+ start_time.hour + ":" + start_time.min;
        // Debug
        // console.log(obj.datestart);
        end_time.hour = ((end_time.ampm == "AM") ? end_time.hour : parseInt(end_time.hour) + 12)
        obj.dateend += "T"+ end_time.hour + ":" + end_time.min;

        dispatch('make', obj);

        close();
    }

</script>

<main>
    <label for="my-modal" class="justify-start btn btn-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-white"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        New Event
    </label>

    <input type="checkbox" id="my-modal" class="modal-toggle"/>
    <div class="modal">
        
        <div class="card grid place-items-center shadow-xl px-3/6 bg-[#F5CFAA]">
            <div class="card-body items-center text-center">

                <form class="form-control w-full max-w-xs" on:submit|preventDefault={form_submit(obj)}>

                    <div class="card-actions justify-start mb-1">
                        <input type="text" placeholder="Event Title" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#F5CFAA] pl-11" bind:value={obj.title}/>
                        <img src={EventTitleIcon} class="absolute w-9 ml-2 mt-1.5" alt="?">
                    </div>
                    
                    <div class="card-actions justify-start mb-1">
                        <input type="text" placeholder="Organization Name" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#F5CFAA] pl-11" bind:value={obj.organization}/>
                        <img src={OrgNameIcon} class="absolute w-9 ml-2 mt-1.5" alt="?">
                    </div>

                    <div class="card-actions justify-start mb-1">
                        <input type="text" placeholder="Class Name" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#F5CFAA] pl-11" bind:value={obj.class}/>
                        <img src={ClassNameIcon} class="absolute w-9 ml-2 mt-1.5" alt="?">
                    </div>

                    <div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="Type" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#F5CFAA] pl-11" bind:value={obj.type}/>
                        <img src={EventTypeIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start mb-1">
                        <input type="date" placeholder="date" aria-label="Starts" class="text-lg text-[#31302e] bg-white input w-full max-w-xs rounded-full mb-2 shadow-xl pl-11" bind:value={obj.datestart}/>
                        <img src={CalIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div>
                        <img src={ClockIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                        <div class="flex bg-white input w-full max-w-xs rounded-full mb-2 shadow-xl pl-11">
                            <select name="hour" class="mr-1 text-lg appearance-none" bind:value={start_time.hour}>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>

                            <span class="text-lg mr-1 mt-2">:</span>

                            <select name="min" class="mr-1 text-lg appearance-none" bind:value={start_time.min}>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>

                            <select name="ap" class="text-lg appearance-none" bind:value={start_time.ampm}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="card-actions justify-start mb-1">
                        <input type="date" placeholder="date" aria-label="Ends" class="text-lg text-[#31302e] bg-white input w-full max-w-xs rounded-full mb-2 shadow-xl pl-11" bind:value={obj.dateend}/>
                        <img src={CalEndIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div>
                        <img src={ClockIcon} class="absolute w-8 ml-2 mt-2" alt="?">
                        <div class="flex bg-white input w-full max-w-xs rounded-full mb-2 shadow-xl pl-11">
                            <select name="hour" class="mr-1 text-lg appearance-none" bind:value={end_time.hour}>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>

                            <span class="text-lg mr-1 mt-2">:</span>

                            <select name="min" class="mr-1 text-lg appearance-none" bind:value={end_time.min}>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>

                            <select name="ap" class="text-lg appearance-none" bind:value={end_time.ampm}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>

                    <div class="modal-actions card-actions">
                        <button type="submit" for="my-modal" class="text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl" on:click={form_submit()}>
                              <label type="submit" for="my-modal" class="text-xl">ADD</label>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    
    </div>
</main>