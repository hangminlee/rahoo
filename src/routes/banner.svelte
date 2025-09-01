<script>
    import { onDestroy, onMount } from "svelte";

    let bannerSwiping = $state(false);
    let banner = $state();
    let activeBanner = $state(0);
    let movementDelta = $state(0);
    let thresholdOver = $state(false);
    let currBanner = $state(0);
    let bannerChanged = $state(true);
    let pointerPos = $state([0, 0]);
    let preBanner = $state();
    let postBanner = $state();
    let pseudoBanner = $state();
    let bannerPos = $state(0);

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
                href: "/place/hakuten",
                element: undefined
            },
            {
                storeName: "류진",
                href: "/place/ryujin",
                element: undefined
            },
            {
                storeName: "566라멘",
                href: "/place/566ramen",
                element: undefined
            },
            {
                storeName: "이치란라멘",
                href: "/place/ichiran",
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
    
    /** @type {number} */
    let bannerChangeTimeout;
    
    $effect(()=>{
        if (movementDelta) {
            bannerChanged = true;
            clearTimeout(bannerChangeTimeout);
            bannerChangeTimeout = setTimeout(()=>{
                bannerChanged = false;
            },100);
        }
    });

    onMount(()=>{
        alignBanner();

        bannerScroll = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target != preBanner && entry.target != postBanner) {
                    if (entry.intersectionRatio > observeThreshold) {
                        activeBanner = bannerData.findIndex(x=>x.element === entry.target);
                        thresholdOver = true;
                    }
                    if (entry.intersectionRatio > observeThreshold && activeBanner == currBanner) {
                        activeBanner = currBanner;
                        thresholdOver = false;
                    }
                } else {
                    if (entry.intersectionRatio > observeThreshold && !bannerSwiping) {
                        smoothScrollListener(()=>bannerPos).then(()=>{
                            if (entry.target == preBanner) {
                                alignBanner("auto", bannerData[bannerData.length - 1].element?.offsetLeft);
                                activeBanner = bannerData.length - 1;
                            } else if (entry.target == postBanner) {
                                alignBanner("auto", bannerData[0].element?.offsetLeft);
                                activeBanner = 0;
                            }
                        })
                    }
                }
            })
        },{
            threshold: [observeThreshold, 1]
        });

        bannerScroll.observe(preBanner);
        bannerScroll.observe(postBanner);
    });

    onDestroy(()=>{
        bannerScroll?.disconnect();
    });

    /**
     * 
     * @param {function} getValue
     */
    function smoothScrollListener (getValue, idleTime = 100) {
        return new Promise((resolve)=> {
            let lastValue = getValue();
            /** @type {number|null}*/
            let timeoutId = null;

            function check() {
                const currentValue = getValue();

                if (currentValue !== lastValue) {
                    lastValue = currentValue;

                    if (timeoutId) clearTimeout(timeoutId);

                    timeoutId = setTimeout(()=>{
                        resolve(currentValue);
                    }, idleTime);
                }
                requestAnimationFrame(check);
            }
            requestAnimationFrame(check);
        });
    }

    /**
     * 
     * @param {PointerEvent} e
     */
    function swipeBannerStart(e) {
        bannerSwiping = true;
        movementDelta = 0;
        currBanner = activeBanner;

        bannerData.forEach(entry=>{
            if (!entry.element) return;
            bannerScroll.observe(entry.element);
        });
        pointerPos = [Math.floor(e.screenX), Math.floor(e.screenY)];
    }

    /**
     * 
     * @param {PointerEvent} e
     */
    function swipeBanner (e) {
        if (!bannerSwiping) return;
        if (!banner) return;
        banner.scrollBy(-e.movementX, 0);
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
            } else {
                if (movementDelta < 0) { // 왼쪽으로 넘기는 상황
                    // @ts-ignore
                    pseudoBanner = bannerData[bannerData.length - 1].element?.nextElementSibling?.offsetLeft
                } else { // 오른쪽으로 넘기는 상황
                    // @ts-ignore
                    pseudoBanner = bannerData[0].element?.previousElementSibling?.offsetLeft
                }
                activeBanner = -1;
            }
        }
        alignBanner('smooth',activeBanner==-1?pseudoBanner:undefined);
        movementDelta = 0;
        smoothScrollListener(()=>bannerPos).then(()=>{
            setTimeout(()=>{currBanner = activeBanner;},10);
        })
    }

    /**
     * 
     * @param {string} behavior 
     * @param {number|undefined} customLeft
     */
    function alignBanner (behavior='auto', customLeft=undefined) {
        const padding = Math.floor(banner.clientWidth * 0.1) / 2;
        bannerSwiping = false;
        banner.scrollTo({
            top: 0,
            left: (customLeft??(bannerData[activeBanner]?.element?.offsetLeft??0)) - padding,
            behavior: behavior
        });
    }
</script>
<svelte:window on:resize={()=>alignBanner()} on:scroll={()=>alignBanner("smooth")}/>
<div class="banner" onpointerdown={swipeBannerStart} bind:this={banner} onscroll={
    function (e) {bannerPos = (e.target instanceof HTMLElement && e.target.scrollLeft)||0}
}>
    <span class="banner-item">
        <div class="store-name">{bannerData[bannerData.length-2].storeName}</div>
    </span>
    <span class="banner-item" bind:this={preBanner}>
        <div class="store-name">{bannerData[bannerData.length-1].storeName}</div>
    </span>
    {#each bannerData as data}
        <a class="banner-item" href="{data.href}" bind:this={data.element} onclick={(e)=>{
            const dx = Math.abs(e.screenX - pointerPos[0]);
            const dy = Math.abs(e.screenY - pointerPos[1]);
            if (dx > 5 || dy > 5) e.preventDefault();
        }}>
            <div class="store-name">{data.storeName}</div>
        </a>
    {/each}
    <span class="banner-item" bind:this={postBanner}>
        <div class="store-name">{bannerData[0].storeName}</div>
    </span>
    <span class="banner-item">
        <div class="store-name">{bannerData[1].storeName}</div>
    </span>
</div>
<div class="banner-index" class:active={bannerChanged}>
    <span>{currBanner + 1} / {bannerData.length}</span>
</div>
<style>
    .banner-index {
        position: absolute;
        right: 1.5em;
        margin-top: -2em;
        pointer-events: none;
        padding: 0.2em 0.5em;
        background: #0001;
        border-radius: 999px;
        color: #0006;
        transition: 0.2s;
        transition-delay: 1s;
        opacity: 0;
    }
    .banner-index.active {
        opacity: 1;
        transition: 0s;
    }
    .banner {
        width: 100%;
        white-space: nowrap;
        overflow-x: hidden;
        border-radius: 1rem;
        filter: drop-shadow(0 0 2px #0003);
        touch-action: pan-y;
        position: relative;
        word-spacing: 0;
        font-size: 0;
    }
    .banner .banner-item {
        display: inline-flex;
        width: 90%;
        background: white;
        border-radius: 1em;
        height: 200px;
        margin-right: clamp(8px, 2vw, 1em);
        -webkit-user-drag: none;
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        user-select: none;
    }
    .banner .banner-item:nth-last-child(1) {
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