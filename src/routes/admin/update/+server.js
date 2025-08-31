import {json} from '@sveltejs/kit';
import {exec} from 'child_process';
import {promisify} from 'util';

const exexe = promisify(exec);

export async function POST () {
    let child = await exexe(
        "pwd",
        {
            timeout: 60000
        },
        (error, stdout, stderr) => {
            console.log('stdout:',stdout);
            console.log('stderr:',stderr);
            if (error !== null) console.log('exec error:', error);
        });
    console.log('child:', child);
    console.log('adsfasdfasdfasdfa');

    return json({data: 'eof'},{ status: 200});
}