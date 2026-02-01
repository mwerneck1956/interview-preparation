# JavaScript Fundamentals

Core JavaScript concepts commonly asked in technical interviews.

## How to Run

```bash
# From the root directory
node javascript-fundamentals/<file>

# Examples
node javascript-fundamentals/closures.js
node javascript-fundamentals/hoisting.js
node javascript-fundamentals/async-map-with-limit.js
```

## Contents

| File | Topic | Description |
|------|-------|-------------|
| `closures.js` | Closures | Demonstrates closure behavior with loops and `var` vs `let` |
| `hoisting.js` | Hoisting | Shows how `var`, `let`, and `const` behave with hoisting |
| `async-map-with-limit.js` | Async/Promises | Implements concurrent async operations with concurrency limit |

## Topics Explained

### Closures (`closures.js`)

Closures allow inner functions to access outer function variables. Classic interview question: why does the loop with `var` print `3` three times?

```javascript
for (var i = 0; i < 3; i++) {
  funcs.push(() => i);  // All reference the same `i`
}
// All return 3 because `var` is function-scoped
```

### Hoisting (`hoisting.js`)

- `var`: Declaration hoisted, initialized as `undefined`
- `let`/`const`: Declaration hoisted, but in "temporal dead zone" until initialization

### Async Map with Limit (`async-map-with-limit.js`)

Implementation of a concurrent async processor with configurable parallelism - common in real-world applications and interviews.

```javascript
asyncMapWithLimit(3, asyncFn, items);  // Runs 3 concurrent workers
```

## Common Interview Questions

- [ ] What is a closure?
- [ ] Explain the event loop
- [ ] Difference between `var`, `let`, `const`
- [ ] What is hoisting?
- [ ] How does `Promise.all` work?
- [ ] Implement debounce/throttle
- [ ] Implement Promise.all from scratch
