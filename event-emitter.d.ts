export declare type MyListener = (args?: any) => void;
export interface Collection {
    [key: string]: Array<{
        listener: MyListener;
        isOnce: boolean;
    }>;
}
export declare class EventEmitter {
    /**
     * 内部状态集
     */
    private _event;
    /**
     *
     * @param type 类型
     * @param listener 要添加的事件句柄
     * @returns 同一类型下，监听的事件数
     */
    addEventListener(type: string, listener: MyListener, isOnce?: boolean): number;
    /**
     * @alias alias of `addEventListener`
     */
    on(type: string, listener: MyListener): void;
    once(type: string, listener: MyListener): void;
    /**
     *
     * @param type 类型
     * @param listener 要移除的事件句柄
     * @returns 同一类型下，监听的事件数
     */
    removeEventListener(type: string, listener: MyListener): number;
    /**
     * @alias alias of `removeEventListener`
     */
    off(type: string, listener: MyListener): void;
    removeAllEventListeners(type: string): void;
    /**
     * @alias alias of `removeAllEventListeners`
     */
    offAll(type: string): void;
    /**
     *
     * @param type 发射的事件类型
     */
    emit(type: string, args: any): void;
}
