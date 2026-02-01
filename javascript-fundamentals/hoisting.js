/**
 * JavaScript Hoisting
 *
 * Hoisting is JavaScript's default behavior of moving declarations to the top
 * of their scope during the compile phase.
 */

// Example 1: var vs let vs const
// Uncomment to see the different behaviors

// console.log(a);  // undefined (var is hoisted and initialized as undefined)
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// console.log(c);  // ReferenceError: Cannot access 'c' before initialization

// var a = 10;
// let b = 20;
// const c = 30;

/**
 * Example 2: var hoisting allows usage before declaration
 *
 * This works because `var num` is hoisted to the top of the scope.
 * The declaration is hoisted, but NOT the assignment.
 *
 * What JavaScript actually sees:
 * var num;        // Declaration hoisted
 * num = 6;        // Assignment stays here
 * console.log(num);
 */
num = 6;
console.log(num);  // Output: 6
var num;

/**
 * Key takeaways:
 * - var: Declaration hoisted, initialized as undefined
 * - let/const: Declaration hoisted, but in "temporal dead zone" until initialization
 * - Function declarations: Fully hoisted (both declaration and definition)
 * - Function expressions: Only the variable is hoisted (like var/let/const)
 */
