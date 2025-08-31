import {json} from '@sveltejs/kit';
import {exec} from 'child_process';

export async function POST () {
    let child = await exec(
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