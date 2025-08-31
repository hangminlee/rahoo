import {json} from '@sveltejs/kit';
import {exec} from 'child_process';

export async function POST () {
    let child = exec("pwd", (error, stdout, stderr) => {
        console.log('stdout:',stdout);
        console.log('stderr:',stderr);
        if (error !== null) console.log('exec error:', error);
    });
    console.log(child);

    return json({data: 'eof'},{ status: 200});
}