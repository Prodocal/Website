<script>

    var event_title, organization, class_name, deadline;

    function newEvent(event_title, organization, class_name, deadline){
        let obj ={
            "events":{
                "eventTitle": event_title,
                "organization": organization,
                "className": class_name,
                "deadline": deadline,
            },
        };
        console.log(obj);
    }
    
</script>

<main>
    <label for="my-modal" class="btn btn-outline btn-info modal-button">Create Event</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
        
        <div class="modal-box card w-96">
            
            <div class="card-body items-center text-center"> 
                
                <div class="form-control" on:submit|preventDefault={newEvent(event_title, organization, class_name, deadline)}>
                    <p>Event</p>
                <div class="card-actions justify-start">
                    <input type="text" placeholder="Event Title" class="input input-bordered" bind:value={event_title}/>

                    <input type="text" placeholder="Organization Name" class="input input-bordered" bind:value={organization}/>
                    
                    <input type="text" placeholder="Class Name" class="input input-bordered" bind:value={class_name}/>
                    
                    <input type="date" placeholder="mm/dd/yyyy" class="input input-bordered" bind:value={deadline}/>
                    <span class="label-text-alt"><br />Deadline</span>
                </div>
           
            </div>
            
            <div class="modal-action">
                <label type="submit" for="my-modal" class="btn">done</label>
            </div>
        
        </div>
    
    </div>
</main>