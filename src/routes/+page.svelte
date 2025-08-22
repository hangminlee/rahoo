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
                    <a href="/"><span class="icon"></span><span class="text">메뉴 아이콘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon"></span><span class="text">메뉴 아이콘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon"></span><span class="text">메뉴 아이콘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon"></span><span class="text">메뉴 아이콘</span></a>
                </li>
            </ul>
        </div>
        <div class="banner">
            <a class="banner-item" href="/">
                하쿠텐
            </a>
            <a class="banner-item" href="/">
                류진
            </a>
            <a class="banner-item" href="/">
                566라멘
            </a>
            <a class="banner-item" href="/">
                이치란라멘
            </a>
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
                                ㅇㅇㅇㅇㅇ
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
                                ㅇㅇㅇㅇㅇ
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
                                ㅇㅇㅇㅇㅇ
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
    width: 50%;
    display: block;
    margin: 0 auto 1em;
}
.menus ul {
    list-style: none;
    margin: 0;
    padding: 1em;
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
    display: block;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 1em;
    box-shadow: 0 0 2px #0003;
    background: white;
}
.menus .text {
    display: block;
    padding-top: 0.5em;
}
.banner {
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
}
.banner a {
    display: inline-flex;
    width: 100%;
    background: white;
    border-radius: 1em;
    height: 200px;
    margin-right: 1em;
    -webkit-user-drag: none;
}
.banner a:nth-last-child(1) {
    margin-right: 0;
}
.reviews {
    margin-top: 1em;
}
.reviews .review {
    white-space: nowrap;
    overflow-x: auto;
    padding: 2px;
}
.review a {
    margin-top: 1em;
    display: inline-flex;
    background: white;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0 0 4px #0003;
    gap: 1em;
    color: black;
    text-decoration: none;
    height: 8em;
    width: 20em;
    white-space: initial;
    margin-right: 0.5em;
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
</style>