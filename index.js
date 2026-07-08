import {useBlocker} from './blocker.js';
import {startBlockingCode} from './codeThatBlocks.js';
import random from 'random';

const {blocker} = useBlocker();

console.log('start');
console.log(blocker.current);


const [blockerResolveTimeout, timeout1, timeout2, timeout3] = [random.int(1000, 4000), 1000, 3000, random.int(1000,4000)];

console.log(blockerResolveTimeout, timeout1, timeout2, timeout3);

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
}, timeout2)

startBlockingCode(blockerResolveTimeout);
