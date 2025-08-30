<script>
    import Banner from "./banner.svelte";
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
        <Banner />
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