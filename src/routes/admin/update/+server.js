import {json} from '@sveltejs/kit';
import {exec} from 'child_process';
import {promisify} from 'util';

const exexe = promisify(exec);

export async function POST () {
    let child = await exexe(
        "git pull",
        {
            timeout: 60000
        }
    );
    console.log(child);

    if (child.error) return json({data: 'Update Failed'}, {status: 500});
    if (child.stdout == 'Already up to date.\n') return json({data: child.stdout}, {status: 200});


    return json({data: child.stdout},{status: 200});
}