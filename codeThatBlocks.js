import {useBlocker} from './blocker.js';

const {blocker} = useBlocker();

export const startBlockingCode  = (timeout) => {
    blocker.current = new Promise(res => {
        setTimeout(() => {
            console.log('promise resolving now')
            res(true);
        }, timeout)
    });
}