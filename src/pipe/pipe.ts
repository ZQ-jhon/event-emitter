import { add, of } from '../operators';

/**
 * @internal
 */
export function pipe(...fns: Function[]) {
    if (!fns || fns.length === 0  ) {
        return;
    }
    return function(input: number) {
        console.log('[input]', input);
        return fns.reduce((prev, fn) => fn(prev), input);
    }
}
