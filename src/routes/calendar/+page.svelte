<script>
    import MonthView from "$lib/components/MonthView.svelte";
    import Month from "$lib/components/calendar/Month.svelte";
    import Create from "$lib/components/Create.svelte";


</script>

<main> 
    <div class="card card-side h-[85vh] w-[95vw] shadow-xl backdrop-blur bg-white/50">
        <div class="card-body w-10 flex flex-col">
            <div class="flex-1">
                <Create/>
            </div>
        </div>
        <Month/>        
    </div>
    
</main>

<style>
    main {
        padding: 10px;
        font-family: Verdana, sans-serif;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

    }
</style>