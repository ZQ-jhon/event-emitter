import { pipe } from "../pipe/pipe";

export class Observable {
    constructor(inputValue: unknown) {
        this._value = inputValue;
    }
    private _value: unknown;
    public pipe(...fns: Function[]) {
        return pipe(...fns)(this._value as number);
    }
}