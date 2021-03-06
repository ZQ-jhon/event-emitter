export type MyListener = (args?: any) => void;
export type Item = { listener: MyListener, isOnce: boolean };
export type InnerState = Record<string, Item[]>;

export class EventEmitter {

    /**
     * 内部状态集
     */
    private _event: InnerState = {};

    /**
     * 
     * @param type 类型
     * @param listener 要添加的事件句柄
     * @returns 同一类型下，监听的事件数
     */
    public addEventListener(type: string, listener: MyListener, isOnce = false) {
        if (typeof listener !== 'function') {
            throw new Error(`${listener} must be typeof 'function' !`);
        }
        if (!this._event[type]) {
            this._event[type] = [];
        }
        // 句柄相同时，不进行重复添加
        if (this._event[type].some(_ => _.listener === listener)) {
            // throw new Error(`${listener} is existed under ${type} on EventEmitter instance.`);
        } else {
            this._event[type].push({ isOnce, listener });
        }
        return this._event[type].length;
    }

    /**
     * @alias alias of `addEventListener`
     */
    public on(type: string, listener: MyListener) {
        return this.addEventListener(type, listener);
    }

    public once(type: string, listener: MyListener) {
        return this.addEventListener(type, listener, true);
    }

    /**
     * 
     * @param type 类型
     * @param listener 要移除的事件句柄
     * @returns 同一类型下，监听的事件数
     */
    public removeEventListener(type: string, listener: MyListener) {
        if (Array.isArray(this._event[type])) {
            const i = this._event[type].findIndex(l => l.listener === listener);
            if (i !== -1) {
                this._event[type].splice(i, 1);
            }
            if (this._event[type].length === 0) {
                delete this._event[type];
                return 0;
            } else {
                return this._event[type].length;
            }
        } else {
            throw new Error(`${type} is not exist on EventEmitter instance.`);
        }
    }

    /**
     * @alias alias of `removeEventListener`
     */
    public off(type: string, listener: MyListener) {
        return this.removeEventListener(type, listener);
    }

    public removeAllEventListeners(type: string) {
        this._event[type] = [];
        Reflect.deleteProperty(this._event, type);
    }

    /**
     * @alias alias of `removeAllEventListeners`
     */
    public offAll(type: string) {
        return this.removeAllEventListeners(type);
    }

    /**
     * 
     * @param type 发射的事件类型
     */
    public emit(type: string, args?: any) {
        if (this._event[type]) {
            this._event[type].forEach(item => {
                item.listener.call(this, args);
                if (item.isOnce) {
                    this.removeEventListener(type, item.listener);
                }
            });
        } else {
            throw new Error(`${type} is not exist on EventEmitter instance.`);
        }
    }

}

