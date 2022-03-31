import { Observable } from './../observable/observable';
export function of(input: number) {
    return new Observable(input);
}