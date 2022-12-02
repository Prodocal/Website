<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/day-grid';
  import Interaction from '@event-calendar/interaction'
  // This is a reference to the component for creating events
  import CreateEvent from "$lib/components/Create.svelte";

  let selected_date;

  // What it sounds like
  function onDateClick(info)
  {
    selected_date = info.date;
    //console.log(selected_date);
  }

  // Gee what could this do I wonder
  function onEventClick(info)
  {
    let event_ref = info.event;
    console.log(event_ref.start);

    // For testing it just removes the event
    // cal_inst.removeEventById(event_ref.id);
  }

  let cal_inst;
  let plugins = [TimeGrid, Interaction];
  let options = {
      view: 'dayGridMonth',
      events: [
          // your list of events
      ],
      dateClick: onDateClick,
      eventClick: onEventClick
  };

  // This function populates the calendar with the user's events on page load
  export function pop_events(obj)
  {
    let event = {
      // id: 69,
      title: obj.title,
      start: obj.datestart,
      end: obj.dateend,
      // allDay: true,
      backgroundColor: "#ffcb82" // This defines the color of the event
    }

    console.log(event.start);
    console.log(event.end);

    let cal_event = cal_inst.addEvent(event).start;
    console.log(cal_event);
  }

</script>

<button on:click={pop_events}>add events</button>
<Calendar bind:this={cal_inst} {plugins} {options}/>