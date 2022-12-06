<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/day-grid';
  import Interaction from '@event-calendar/interaction'
  // This is a reference to the component for creating events
  // import CreateEvent from "$lib/components/Create.svelte";
  import { createEventDispatcher } from 'svelte';

  let selected_date;

  const dispatchEC = createEventDispatcher();

  // What it sounds like
  function onDateClick(info)
  {
    selected_date = info.date;
    //console.log(selected_date);
  }

  // Gee what could this do I wonder
  function onEventClick(info)
  {
    //console.log(info.title);

    dispatchEC('eventclick', info);

    /*let event_ref = info.event;
    console.log(event_ref.title);*/

    // For testing it just removes the event
    /*cal_inst.removeEventById(event_ref.id);*/
  }

  let cal_inst;
  let plugins = [TimeGrid, Interaction];
  let options = {
      view: 'dayGridMonth',
      events: [
          // your list of events
      ],
      dateClick: onDateClick,
      eventClick: onEventClick,
  };

  // This function adds a single event to the calendar and the database
  export function AddEvent(input)
  {
    let event = {
      // id: 69,
      title: input.title,
      start: input.start_date,
      end: input.end_date,
      // allDay: true,
      backgroundColor: "#ffcb82" // This defines the color of the event
    }

    console.log(event.start);
    console.log(event.end);

    let cal_event = cal_inst.addEvent(event).start;
    console.log(cal_event);
  }

  export function RemoveEvent(id){
    cal_inst.removeEventById(id);
  }


</script>


<button on:click={AddEvent}>add events</button>
<Calendar bind:this={cal_inst} {plugins} {options} on:deleteevent={RemoveEvent}/>