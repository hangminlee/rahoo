<script>
  import { onMount } from "svelte";

    onMount(()=>{
        fetch("/admin/update",{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            }
        });
    })
</script>
<div class="sub">업데이트 중...</div>
<style>
    .sub {
        display: flex;
        width: 100%;
        height: 100dvh;
        align-items: center;
        justify-content: center;
    }
</style>