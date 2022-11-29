<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/day-grid';
  import Interaction from '@event-calendar/interaction'
  // This is a reference to the component for creating events
  import CreateEvent from "$lib/components/Create.svelte";

  let create_modal;

  function onDateClick(info)
  {
    console.log(info.dateStr);
    create_modal = CreateEvent;
  }

  let cal_inst;
  let tmp; // DEBUG
  let plugins = [TimeGrid, Interaction];
  let options = {
      view: 'dayGridMonth',
      events: [
          // your list of events
      ],
      dateClick: onDateClick
  };

  // This function populates the calendar with the user's events on page load
  function pop_events()
  {
    let event = {
      id: 69,
      allDay: true,
      title: "Test Event",
      backgroundColor: "#ffcb82"
    }

    tmp = cal_inst.addEvent(event);
  }

  function remove_test()
  {
    cal_inst.removeEventById(tmp.id);
  }

</script>

<button on:click={pop_events}>add events</button>
<button on:click={remove_test}>remove test event</button>
<Calendar bind:this={cal_inst} {plugins} {options}/>
<svelte:component this={create_modal} />
