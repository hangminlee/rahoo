import {json} from '@sveltejs/kit';
import {exec} from 'child_process';
import {promisify} from 'util';

const exexe = promisify(exec);

export async function POST () {
    let child = await exexe(
        "git pull",
        {
            timeout: 60000
        });
    console.log('child: ', child);

    return json({data: 'eof'},{ status: 200});
}