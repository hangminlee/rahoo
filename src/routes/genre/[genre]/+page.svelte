<script>
    let { data } = $props();
</script>
<div>
    <h1>너무나 놀라운... {data.title}</h1>
    <div class="sub">
        서브컨텐츠
    </div>
</div>
<style>
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3em;
    }
</style>