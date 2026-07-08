import {useBlocker} from './blocker.js';

const {blocker} = useBlocker();

export const startBlockingCode  = (t) => {
    const timeout = t || 1500
    console.log('blocking code timout: ' + timeout)
    blocker.current = new Promise(res => {
        setTimeout(() => {
            console.log('promise resolving now')
            res(true);
        }, timeout);
    });
}