/**
 * LeetCode 20 - Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Uses a stack to match opening and closing brackets.
 *
 * Time: O(N) - single pass through the string
 * Space: O(N) - stack can hold up to N/2 opening brackets
 */
function isValid(s: string): boolean {
    const stack: string[] = [];

    const openingBrackets = new Set(['{', '(', '[']);
    const bracketPairs: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of s) {
        if (openingBrackets.has(char)) {
            stack.push(char);
        } else {
            const top = stack.pop();
            // If stack is empty or brackets don't match, invalid
            if (!top || char !== bracketPairs[top]) {
                return false;
            }
        }
    }

    // Valid only if all brackets were matched
    return stack.length === 0;
}

// Test
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true
