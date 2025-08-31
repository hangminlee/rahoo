<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    let status = $state('');

    onMount(async ()=>{
        try {
            const response = await fetch("/admin/update",{
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const result = await response.json();
                status = result.data;
                goto("/");
            }
        } catch (error) {
            console.error(error);
        }
    })
</script>
<div class="sub">
    <p>업데이트 중...</p>
    {#if status !== ''}
    <p>{status}</p>
    {/if}
</div>
<style>
    .sub {
        display: flex;
        width: 100%;
        height: 100dvh;
        align-items: center;
        justify-content: center;
    }
</style>