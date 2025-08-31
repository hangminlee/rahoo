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
                    <a href="/"><span class="icon">돈코츠</span><span class="text">돈코츠라멘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">쇼유</span><span class="text">쇼유라멘</span></a>
                </li> 
                <li>
                    <a href="/"><span class="icon">시오</span><span class="text">시오라멘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">미소</span><span class="text">미소라멘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">토리</span><span class="text">토리파이탄</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">지로</span><span class="text">지로라멘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">탄탄</span><span class="text">탄탄멘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">츠케</span><span class="text">츠케멘</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">우동</span><span class="text">우동</span></a>
                </li>
                <li>
                    <a href="/"><span class="icon">소바</span><span class="text">소바</span></a>
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
.header {
    padding: 1em 0;
    text-align: center;
    position:sticky;
    top: 0;
    z-index: 0;
}
.sub {
    position: relative;
    z-index: 1;
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
    display: grid;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(5, fit-content);
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
    font-size: 1.5em;
    font-weight: 900;
    color: #f1bd3a;
    width: 64px;
    height: 64px;
    border-radius: 1rem;
    box-shadow: 0 0 2px #0003;
    background: white;
    margin: 0 auto;
    border: 2px solid transparent;
    text-align: center;
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
@media screen and (max-width: 450px) {
    .menus ul {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media screen and (max-width: 320px) {
    .menus ul {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>