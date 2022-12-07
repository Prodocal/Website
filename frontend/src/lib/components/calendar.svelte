<script>
  import Calendar from '@event-calendar/core';
  import MonthView from '@event-calendar/day-grid';
  import WeekView from '@event-calendar/time-grid';
  import Interaction from '@event-calendar/interaction'
  // This is a reference to the component for creating events
  // import CreateEvent from "$lib/components/Create.svelte";
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  let selected_date;

  const dispatchEC = createEventDispatcher();
  
  const dispatchOM = createEventDispatcher();

  onMount(() => {
    dispatchOM('loaded');
  });
  
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
  let plugins = [MonthView, WeekView, Interaction];
  let options = {
      view: 'dayGridMonth',
      events: [
          // your list of events
      ],
      dateClick: onDateClick,
      eventClick: onEventClick,
      eventStartEditable: false,
      eventBackgroundColor: '#ffcb82', // This is the default color of events on the calendar
      headerToolbar: {start: 'dayGridMonth,timeGridWeek', center: 'title', end: 'today prev,next'},
  };

  // This function adds a single event to the calendar
  export function AddEvent(input)
  {
    let event = {
      // id: 69,
      title: input.title,
      start: input.start_date,
      end: input.end_date,
      // allDay: true,
      backgroundColor: input.color // This defines the color of the event
    }

    // console.log(event.start);
    // console.log(event.end);

    let cal_event = cal_inst.addEvent(event);
    // console.log(cal_event);
  }

  // This function removes events from the calendar and the database
  export function RemoveEvent(id){
    cal_inst.removeEventById(id);

    // TODO: Remove from DB
  }


</script>


<Calendar bind:this={cal_inst} {plugins} {options} on:deleteevent={RemoveEvent}/>
<!-- <button class="btn btn-warning w-32" on:click={AddEvent}>Add Debug Event</button> -->