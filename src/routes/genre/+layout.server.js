/** @type {import('./$types').LayoutServerLoad} */
export async function load({url}) {
    const genre = [
        { 'icon': '돈코츠', 'label': '돈코츠라멘', 'href': '/genre/tonkotsu' },
        { 'icon': '쇼유', 'label': '쇼유라멘', 'href': '/genre/syouyuu' },
        { 'icon': '시오', 'label': '시오라멘', 'href': '/genre/sio' },
        { 'icon': '미소', 'label': '미소라멘', 'href': '/genre/miso' },
        { 'icon': '토리', 'label': '토리파이탄', 'href': '/genre/tori' },
        { 'icon': '지로', 'label': '지로라멘', 'href': '/genre/jirou' },
        { 'icon': '이에케', 'label': '이에케라멘', 'href': '/genre/ieke' },
        { 'icon': '탄탄', 'label': '탄탄멘', 'href': '/genre/tantan' },
        { 'icon': '츠케', 'label': '츠케멘', 'href': '/genre/tsuke' },
        { 'icon': '우&소', 'label': '우동 & 소바 ', 'href': '/genre/udon' },
    ];

    return {
        title: genre[genre.findIndex(x=>x.href.includes(url.pathname))]?.label
    }
}