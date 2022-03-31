/**
 * override signatrues
 */

export function add(fn: Function): (x: number) => unknown;
export function add(n: number): (x: number) => number;


export function add(fn: Function | number) {
    // if (typeof fn === 'number') {
    //     return function (x: number) {
    //         return x + fn;
    //     }
    // } else {
    //     return function (x: number) {
    //         return fn(x);
    //     }
    // }
    return function (x: number) {
        return typeof fn === 'number' ? (x + fn) : fn(x);
    }
};

