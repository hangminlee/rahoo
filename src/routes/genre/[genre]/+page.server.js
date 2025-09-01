/** @type {import('./$types').PageServerLoad} */
export async function load({parent}) {
    const parents = await parent();
    return {
        ...parents
    }    
}