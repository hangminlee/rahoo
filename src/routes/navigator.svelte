<script>
    import { page } from "$app/state";

    let currentActive = $derived(page.data.slug);

    let { direction = $bindable() } = $props();

    const menus = $state([
        { path: '', href: '/', icon: 'fas fa-home', label: '홈'},
        { path: 'find', href: '/find', icon: 'fas fa-map-location-dot', label: '식당 찾기'},
        { path: 'review', href: '/review', icon: 'fas fa-pencil', label: '나의 리뷰'},
        { path: 'favorite', href: '/favorite', icon: 'fas fa-star', label: '즐겨찾기'},
        { path: 'menu', href: '/menu', icon: 'fas fa-ellipsis', label: '더보기'},
    ]);

    function directionDetector (path) {
        const currentIndex = menus.findIndex((element)=>element == currentActive);
        const targetIndex = menus.findIndex((element)=>element == path);

        if (currentIndex != -1 && targetIndex != -1) {
            if (targetIndex > currentIndex) {
                direction = 'forward';
            } else {
                direction = 'backward';
            }
        } else {
            direction = 'forward';
        }
    }

</script>
<div class="navigator">
    <ul>
        {#each menus as menu}
        <li>
            <a href="{menu.href}" class:active={menu.path===currentActive} onclick={()=>directionDetector(menu.path)}>
                <span class="icon"><i class="{menu.icon}"></i></span>
                <span class="text">{menu.label}</span>
            </a>
        </li>
        {/each}
    </ul>
</div>
<style>
    .navigator {
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100vw - clamp(10px, 4vw, 40px));
        background: #fffa;
        border-radius: 999px;
        overflow: hidden;
        box-shadow: 0 2px 4px #0003;
        backdrop-filter: blur(4px);
        font-size: clamp(12px, 3vw, 16px);
        view-transition-name: navigator;
        z-index: 99999;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: stretch;
    }
    ul li {
        display: block;
        flex-grow: 1;
    }
    ul li a {
        color: black;
        text-decoration: none;
        padding: 0.5em 0;
        display: block;
        width: 100%;
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        color: #0002;
        width: 100%;
        height: 1.5em;
        margin: 0 auto;
        transition: .1s;
    }
    a:hover .icon {
        color: #0001;
    }
    a.active .icon {
        color: #fada33;
    }
    a.active {
        font-weight: bolder;
    }
    .icon i {
        filter: drop-shadow(0 2px 2px #0001);
        display: block;
        width: 100%;
    }
    .text {
        display: block;
        text-align: center;
    }
    ::view-transition-old(navigator) {
        animation-duration: 0s;
    }
    ::view-transition-new(navigator) {
        animation-duration: 0s;
    }
</style>
