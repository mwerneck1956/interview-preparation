/**
 * JavaScript Closures
 *
 * A closure is a function that has access to variables from its outer
 * (enclosing) function's scope, even after the outer function has returned.
 */

/**
 * Example 1: Basic closure - counter function
 *
 * The inner function maintains access to `counter` even after
 * `createCounter()` has finished executing.
 */
function createCounter() {
    let counter = 0;

    return function increment() {
        counter++;
        return counter;
    };
}

const counter = createCounter();
console.log("Counter example:");
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

/**
 * Example 2: Classic interview question - var in a loop
 *
 * Why does this print 3, 3, 3 instead of 0, 1, 2?
 *
 * Because `var` is function-scoped (not block-scoped), there's only ONE `i`
 * variable shared by all the arrow functions. By the time the functions are
 * called, the loop has finished and `i` equals 3.
 */
console.log("\nLoop with var (all reference same i):");
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs.push(() => i);
}

console.log(funcs[0]());  // 3
console.log(funcs[1]());  // 3
console.log(funcs[2]());  // 3

/**
 * Solution: Use `let` instead of `var`
 *
 * `let` is block-scoped, so each iteration creates a new `j` variable.
 * Each function captures its own copy of `j`.
 */
console.log("\nLoop with let (each captures its own j):");
var funcsFixed = [];

for (let j = 0; j < 3; j++) {
    funcsFixed.push(() => j);
}

console.log(funcsFixed[0]());  // 0
console.log(funcsFixed[1]());  // 1
console.log(funcsFixed[2]());  // 2

/**
 * Key takeaways:
 * - Closures "close over" variables from their outer scope
 * - var is function-scoped, let/const are block-scoped
 * - Be careful with closures in loops when using var
 */
