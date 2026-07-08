import {useBlocker} from './blocker.js';
import {startBlockingCode} from './codeThatBlocks.js';
import random from 'random';

const {blocker} = useBlocker();

console.log('start');
console.log(blocker.current);


const [timeout1, timeout2, timeout3] = [1000, 2000, random.int(500,3500)];

console.log('code 1 timeout: ' + timeout1);
console.log('code 2 timeout: ' + timeout2);
console.log('code 3 timeout: ' + timeout3);
console.log('\n');

setTimeout(async () => {
    console.log('1 code before block');
    await blocker.current;
    console.log('1 after block', blocker.current)

}, timeout1)

setTimeout(async () => {
    console.log('2 code before block');
    await blocker.current
    console.log('2 after block', blocker.current);
}, timeout2)

setTimeout(async () => {
    console.log('3 code before block');
    await blocker.current
    console.log('3 after block', blocker.current);
}, timeout3)

startBlockingCode();
