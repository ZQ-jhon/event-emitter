export declare type MyListener = (args?: any) => void;
export declare type Item = {
    listener: MyListener;
    isOnce: boolean;
};
export declare type InnerState = Record<string, Item[]>;
export declare class EventEmitter {
    private _event;
    addEventListener(type: string, listener: MyListener, isOnce?: boolean): number;
    on(type: string, listener: MyListener): number;
    once(type: string, listener: MyListener): number;
    removeEventListener(type: string, listener: MyListener): number;
    off(type: string, listener: MyListener): number;
    removeAllEventListeners(type: string): void;
    offAll(type: string): void;
    emit(type: string, args?: any): void;
}
