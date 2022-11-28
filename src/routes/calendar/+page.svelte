<script>
    import MonthView from "$lib/components/MonthView.svelte";
    import Month from "$lib/components/Month.svelte";
    import Create from "$lib/components/Create.svelte";
</script>

<main> 
    <div class="card card-side max-h-[85vh] shadow-xl backdrop-blur bg-white/50">
        <div class="card-body w-96 flex flex-col">
            <div class="flex-1 flex flex-col">
                <div class="btn">
                    Month
                </div>
                <br/>
                <div class="btn">
                    Week
                </div>
                <br/>
                <div class="btn">
                    Day
                </div>
            </div>
            <div class="flex-1">
                <Create/>
            </div>
        </div>
        <div class="card-body">
            <Month/>
        </div>
        
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