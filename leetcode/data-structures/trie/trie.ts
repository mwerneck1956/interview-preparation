class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}


export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.get(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char)!;
        }

        current.isEndOfWord = true;
    }

    search(word: string) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char))
                return false

            current = current.children.get(char)!;
        }

        return true;
    }

    startsWithPrefix(prefix: string) {
        let current = this.root;

        // 1. Navega até o final do prefixo
        for (const char of prefix) {
            if (!current.children.get(char)) {
                return [];
            }
            current = current.children.get(char)!;
        }

        const results: string[] = [];

        // 2. DFS para coletar palavras
        const dfs = (node: any, path: string) => {
            if (node.isEndOfWord) {
                results.push(path);
            }

            for (const [char, childNode] of node.children) {
                dfs(childNode, path + char);
            }
        };

        dfs(current, prefix);

        return results;
    }

}

const TrieTest = new Trie();

TrieTest.insert('ant');
TrieTest.insert('and');


console.log(TrieTest.search('an'));
console.log(TrieTest.startsWithPrefix('an'))