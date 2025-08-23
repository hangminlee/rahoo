<script>
  import { onMount } from "svelte";

    let mouseX = $state(0);
    let bannerSwiping = $state(false);
    let banner = $state();
    let activeBanner = $state();

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
        bannerScroll = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.4) {
                    activeBanner = entry.target;
                }
            })
        },{
            threshold: 0.4
        });
    })

    function swipeBannerStart() {
        bannerSwiping = true;
    }

    /**
     * 
     * @param {PointerEvent} e
     */
    function swipeBanner (e) {
        if (bannerSwiping) {
            mouseX += e.movementX;
            banner.scrollBy(-e.movementX, 0);
            bannerData.forEach(entry=>{
                if (!entry.element) return;
                bannerScroll.observe(entry.element);
            });
        }
    }
    function swipeBannerClear() {
        bannerSwiping = false;
        bannerData.forEach(entry=>{
            if (!entry.element) return;
            bannerScroll.unobserve(entry.element);
        });
        banner.scrollTo({
            top: 0,
            left: activeBanner.offsetLeft,
            behavior: "smooth"
        });
    }
</script>
<div class="wrapper">
    <div class="header">
        <p>라멘 덕후들만을 위한 구르메-</p>
        <h1>RAHOO</h1>
    </div>
    <div class="sub">
        <div class="search-sect">
            <input type="search" name="query" />
        </div>
        <div class="menus">
            <ul>
                <li>
                    <a href="/"><span class="icon"><i class="fas fa-map-location-dot"></i></span><span class="text">식당 찾기</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon"><i class="fas fa-pencil"></i></span><span class="text">리뷰 쓰기</span></a>
                </li> 
                <li>
                    <a href="/"><span class="icon"><i class="fas fa-star"></i></span><span class="text">즐겨찾기</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon"><i class="fas fa-ellipsis"></i></span><span class="text">더보기</span></a>
                </li>
            </ul>
        </div>
        <div class="banner" onpointerdown={swipeBannerStart} bind:this={banner}>
            {#each bannerData as data}
                <a class="banner-item" href="{data.href}" bind:this={data.element}>
                    <div class="store-name">{data.storeName}</div>
                </a>
            {/each}
        </div>
        <div class="reviews">
            <h2>실시간 리뷰</h2>
            <div class="review">
                <a href="/">
                    <div class="thumb">
                        <img src="" alt="대체이미지">
                    </div>
                    <div class="content">
                        <h3>하쿠텐</h3>
                        <div class="text"><p>처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추</p></div>
                        <div class="meta">
                            <div class="rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="date">
                                2025-08-23
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/">
                    <div class="thumb">
                        <img src="" alt="대체이미지">
                    </div>
                    <div class="content">
                        <h3>566라멘</h3>
                        <div class="text"><p>처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추</p></div>
                        <div class="meta">
                            <div class="rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="date">
                                2025-08-23
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/">
                    <div class="thumb">
                        <img src="" alt="대체이미지">
                    </div>
                    <div class="content">
                        <h3>류진</h3>
                        <div class="text"><p>처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추처음 와봤는데 여기 진짜 상당하네요;; 강추</p></div>
                        <div class="meta">
                            <div class="rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="date">
                                2025-08-23
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<style>
.wrapper {
    background: var(--default-primary);
}
.header {
    padding: 1em 0;
    text-align: center;
}
.sub {
    border-radius: 1rem 1rem 0 0;
    background: var(--default-background);
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 0 4px #0003;
    padding: 1em;
}
.search-sect input {
    max-width: 100%;
    width: 480px;
    display: block;
    margin: 0 auto 1em;
}
.menus ul {
    list-style: none;
    margin: 0;
    padding: 1em 0;
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-around;
}
.menus ul li {
    display: block;
}
.menus ul li a {
    color: black;
    text-decoration: none;
}
.menus .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #fada33;
    width: 64px;
    height: 64px;
    border-radius: 1rem;
    box-shadow: 0 0 2px #0003;
    background: white;
    margin: 0 auto;
    border: 2px solid transparent;
}
.menus .icon i {
    filter: drop-shadow(0 2px 2px #0001);
}
.menus .text {
    display: block;
    padding-top: 0.5em;
    text-align: center;
}
.menus ul li a:hover .icon {
    border: 2px solid #fada33;
}
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
.reviews {
    margin-top: 1em;
}
.reviews .review {
    white-space: nowrap;
    overflow-x: auto;
    filter: drop-shadow(0 0 2px #0003);
    border-radius: 1em;
    margin-top: 1em;
}
.review a {
    display: inline-flex;
    background: white;
    padding: 1em;
    border-radius: 1em;
    gap: 1em;
    color: black;
    text-decoration: none;
    height: 8em;
    width: 20em;
    white-space: initial;
    margin-right: 0.5em;
}
.review a:nth-last-child(1) {
    margin-right: 0;
}
.review a .thumb {
    flex-basis: 100px;
    flex-shrink: 0;
}
.review a h3 {
    font-size: 1em;
}
.review a .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
}
.review a .content .text {
    flex-grow: 1;
    min-height: 0;
}
.review a .content p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 4;
    -webkit-line-clamp: 4;
}
.review a .meta {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
    color: #0009;
}
.review a .rate {
    color: #fada33;
    display: flex;

}
</style>