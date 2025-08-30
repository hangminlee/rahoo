/** @type {import('./$types').LayoutLoad} */
export async function load({params}) {
    return {
        slug: params.menu
    }
}