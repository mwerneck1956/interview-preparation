/**
 * LeetCode 953 - Verifying an Alien Dictionary
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 *
 * Given a list of words and an alien alphabet order, verify if words are sorted.
 *
 * Time: O(N * M) where N = words count, M = avg word length
 * Space: O(1) - alphabet map has fixed 26 chars
 */

const words = ["kuvp", "q"], order = "ngxlkthsjuoqcpavbfdermiywz"

function isAlienSorted(words: string[], order: string): boolean {
    // Map each letter to its position in the alien alphabet - O(26)
    const letterWeight = new Map<string, number>();

    for (let i = 0; i < order.length; i++) {
        letterWeight.set(order[i], i);
    }

    // Compare adjacent words - if any pair is out of order, return false
    // TODO: Implement word comparison logic

    return true;
}

console.log(isAlienSorted(words, order));