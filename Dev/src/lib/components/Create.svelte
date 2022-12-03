<script>
    import EventTitle from "$lib/assets/event_title.svg";
    import OrgName from "$lib/assets/organization_name.png";
    import ClassName from "$lib/assets/class_name.png";
    import TypeName from "$lib/assets/type_icon.svg";
    import Date from "$lib/assets/calendar.png";
    import {event, validateEvent, newEvent} from "$lib/ApiJS/data.utils.js";
    //var event_title, organization, class_name, deadline;

    // function newEvent(event_title, organization, class_name, deadline){
    //     let obj ={
    //         "events":{
    //             "eventTitle": event_title,
    //             "organization": organization,
    //             "className": class_name,
    //             "deadline": deadline,
    //         },
    //     };
    //     console.log(obj);
    // }
    const obj = Object.create(event);

    function clearObj(obj) {
        for (const key in obj) {
            delete obj[key];
        }
    }

    function form_submit(){
        validateEvent(obj);
        close();
    }

</script>

<main>
    <label for="my-modal" class="justify-start btn btn-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-white"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        New Event
    </label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
        
        <div class="card grid place-items-center shadow-xl px-3/6 bg-gradient-to-bl from-[#FAE1A7] to-[#FFAB9F]">
            
            <div class="card-body items-center text-center"> 
                
                <form class="form-control w-full max-w-xs" on:submit|preventDefault={newEvent(obj)}> 
                
                    <div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="Event Title" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.title}/>
                        <img src={EventTitle} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>
                    
                    <div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="Organization Name" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.organization}/>
                        <img src={OrgName} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="Class Name" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.class}/>
                        <img src={ClassName} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start mb-4">
                        <input type="text" placeholder="Type" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.type}/>
                        <img src={TypeName} class="absolute w-8 ml-2 mt-2" alt="?">
                    </div>

                    <div class="card-actions justify-start mb-4">
                        <input type="date" placeholder="date" aria-label="Start Date" class="bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11" bind:value={obj.deadline}/>
                        <img src={Date} class="absolute w-8 ml-2 mt-2" alt="?">
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