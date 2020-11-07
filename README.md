# EventEmitter

#### Fast Use
```bash
 $ cd your/project/path
 $ npm i @zq-jhon/event-emitter --save
 $ touch index.ts
```

```typescript
// index.ts
import { EventEmitter } from "@zq-jhon/event-emitter";

const e = new EventEmitter();

const clickHandler = () => console.log(`Clicked.`);

// Registry Event Handler
e.addEventListener("click", clickHandler);
// Emit Event
e.emit("click");

// Uninstall Event Listener
e.off("click", clickHandler);
```

#### Registry Listener(s)

- `addEventListener` alias `on`
- `once`

#### Remove Listener(s)

- `removeEventListener` alias `off`
- `removeAllEventListeners` alias `offAll`

#### Trigger Event(s)

- `emit(type, eventHandler)`
