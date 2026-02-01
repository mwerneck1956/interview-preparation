/**
 * LeetCode 3 - Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Uses sliding window technique with a hash map to track character positions.
 *
 * Example: s = "abcabcbb" -> Output: 3 (substring "abc")
 *
 * Time: O(N) - single pass through the string
 * Space: O(min(N, M)) where M is the charset size
 */
function lengthOfLongestSubstring(s: string): number {
    let start = 0, end = 0;
    let maxSize = 0;
    const seenLetters = new Map<string, number>();

    while (end < s.length) {
        // If character was seen and is within current window, shrink window
        if (seenLetters.has(s[end])) {
            const lastIndex = seenLetters.get(s[end])!;

            if (lastIndex >= start) {
                start = lastIndex + 1;
            }
        }

        // Update character position and track max window size
        seenLetters.set(s[end], end);
        maxSize = Math.max(maxSize, end - start + 1);
        end++;
    }

    return maxSize;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb"));  // 3
console.log(lengthOfLongestSubstring("bbbbb"));     // 1
console.log(lengthOfLongestSubstring("pwwkew"));    // 3
