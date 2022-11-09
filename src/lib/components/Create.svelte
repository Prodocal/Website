<script>
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
    <label for="my-modal" class="btn btn-outline btn-info modal-button">Create Event</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
        
        <div class="modal-box card w-96">
            
            <div class="card-body items-center text-center"> 
                
                <form class="form-control" on:submit|preventDefault={newEvent(obj)}>
                    <p>Event</p>
                    <button type="submit" class="text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl">
                        help by gods grace
                    </button>   
                    <div class="card-actions justify-start">
                        <input type="text" placeholder="Event Title" class="input input-bordered" bind:value={obj.title}/>

                        <input type="text" placeholder="Organization Name" class="input input-bordered" bind:value={obj.organization}/>
                    
                        <input type="text" placeholder="Class Name" class="input input-bordered" bind:value={obj.class}/>

                        <input type="text" placeholder="Type" class="input input-bordered" bind:value={obj.type}/>
                    
                        <input type="date" placeholder="mm/dd/yyyy" class="input input-bordered" bind:value={obj.deadline}/>
                        <span class="label-text-alt"><br />Deadline</span>
                    </div>
                    <div class="modal-actions card-actions">
                    <button type="submit" for="my-modal" on:click={form_submit()}>done</button>
                    </div>
                </form>
            </div>
        </div>
    
    </div>
</main>