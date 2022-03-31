import { add, of } from "./operators";

// const result = pipe(
//     add((n: number) => n + 1),
//     add(3)
// )(1);
// console.log(result);


const result = of(1).pipe(
    add((item: number) => item + 1)
);
console.log(`[result]`, result);