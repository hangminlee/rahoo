<script>
    import { onMount } from "svelte";

    let mouseX = $state(0);
    let bannerSwiping = $state(false);
    let banner = $state();
    let activeBanner = $state(0);
    let movementDelta = $state(0);
    let thresholdOver = $state(false);
    let currBanner = $state(0);

    const observeThreshold = 0.4;
    const swipeThreshold = 10;
    
    /** @type {IntersectionObserver} */
    let bannerScroll;
    
    /**
     * @typedef {{
     * storeName: string,
     * href: string,
     * element: undefined | HTMLElement
     * }} BannerData
     */
    
    /** @type Array<BannerData> */
        let bannerData = $state([
            {
                storeName: "하쿠텐",
                href: "/",
                element: undefined
            },
            {
                storeName: "류진",
                href: "/",
                element: undefined
            },
            {
                storeName: "566라멘",
                href: "/",
                element: undefined
            },
            {
                storeName: "이치란라멘",
                href: "/",
                element: undefined
            }
        ]);
        
    $effect(()=>{
        if (bannerSwiping) {
            window.addEventListener('pointermove',swipeBanner);
            window.addEventListener('pointerup',swipeBannerClear);
        } else {
            window.removeEventListener('pointermove',swipeBanner);
            window.removeEventListener('pointerup',swipeBannerClear);
        }
    });

    onMount(()=>{
        alignBanner();

        bannerScroll = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > observeThreshold) {
                    activeBanner = bannerData.findIndex(x=>x.element === entry.target);
                    thresholdOver = true;
                }
                if (entry.intersectionRatio > observeThreshold && activeBanner == currBanner) {
                    thresholdOver = false;
                }
            })
        },{
            threshold: observeThreshold
        });
    })

    function swipeBannerStart() {
        bannerSwiping = true;
        movementDelta = 0;
        currBanner = activeBanner;
    }

    /**
     * 
     * @param {PointerEvent} e
     */
    function swipeBanner (e) {
        if (!bannerSwiping) return;
        mouseX += e.movementX;
        banner.scrollBy(-e.movementX, 0);
        bannerData.forEach(entry=>{
            if (!entry.element) return;
            bannerScroll.observe(entry.element);
        });
        movementDelta = e.movementX;
    }
    function swipeBannerClear() {
        const nextIndex = movementDelta < 0 ? activeBanner + 1 : activeBanner -1;
        bannerSwiping = false;
        bannerData.forEach(entry=>{
            if (!entry.element) return;
            bannerScroll.unobserve(entry.element);
        });
        if (!thresholdOver && Math.abs(movementDelta) > swipeThreshold && banner.scrollLeft != 0 && banner.scrollLeft != banner.scrollWidth - banner.clientWidth) {
            if (nextIndex >= 0 && nextIndex < bannerData.length) {
                activeBanner = nextIndex;
            }
        }

        banner.scrollTo({
            top: 0,
            left: bannerData[activeBanner].element?.offsetLeft,
            behavior: "smooth"
        });
        movementDelta = 0;
    }

    function alignBanner () {
        banner.scrollTo({
            top: 0,
            left: bannerData[activeBanner].element?.offsetLeft,
            behavior: "auto"
        })
    }
</script>
<svelte:window on:resize={alignBanner}/>
<div class="banner" onpointerdown={swipeBannerStart} bind:this={banner}>
    {#each bannerData as data}
        <a class="banner-item" href="{data.href}" bind:this={data.element}>
            <div class="store-name">{data.storeName}</div>
        </a>
    {/each}
</div>
<style>
    .banner {
        width: 100%;
        white-space: nowrap;
        overflow-x: hidden;
        border-radius: 1em;
        filter: drop-shadow(0 0 2px #0003);
        touch-action: none;
    }
    .banner a {
        display: inline-flex;
        width: 100%;
        background: white;
        border-radius: 1em;
        height: 200px;
        margin-right: 1em;
        -webkit-user-drag: none;
        text-decoration: none;
    }
    .banner a:nth-last-child(1) {
        margin-right: 0;
    }
    .banner .store-name {
        height: 100%;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 3em;
        color: black;
        font-weight: 900;
    }
</style>