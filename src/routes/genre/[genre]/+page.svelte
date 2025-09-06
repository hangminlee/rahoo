<script>
    let { data } = $props();
</script>
<h1>너무나 놀라운... {data.genre}</h1>
<div class="sub">
    서브컨텐츠
    <a href="./">한 단계 올라가기</a>
</div>
<style>
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3em;
    }
</style>
