<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/day-grid';
  
  let plugins = [TimeGrid];
  let options = {
      view: 'dayGridMonth',
      events: [
          // your list of events
      ]
  };

  
</script>

<Calendar {plugins} {options} />