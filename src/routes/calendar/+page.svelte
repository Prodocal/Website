<script>
    import MonthView from "$lib/components/MonthView.svelte";
    import Month from "$lib/components/calendar/Month.svelte";
    import Create from "$lib/components/Create.svelte";
    import Calendar from "$lib/components/calendar.svelte";
</script>

<main> 
    <div class="card card-side h-[85vh] w-[95vw] shadow-xl backdrop-blur bg-white/50">
        <div class="card-body w-[40px] flex-none">
            <Create/>
        </div>
        <div class="card-body w-10 flex-auto">
            <Calendar/>    
        </div>    
    </div>
    
</main>