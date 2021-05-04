package Week236;

class Trie {
    private Trie[] child;
    private boolean exist;

    /** Initialize your data structure here. */
    public Trie() {
        child = new Trie[26];
        exist = false;
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
        if (word.length() == 0) {
            exist = true;
        } else {
            char c = word.charAt(0);
            if (child[c - 97] == null) {
                child[c - 97] = new Trie();
            }
            child[c - 97].insert(word.substring(1));
        }
    }

    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        if (word.length() == 0) {
            return exist;
        } else {
            char c = word.charAt(0);
            if (child[c - 97] == null) {
                return false;
            }
            return child[c - 97].search(word.substring(1));
        }
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        if (prefix.length() == 0) {
            if (exist) {
                return true;
            }
            for (int i = 0; i < 26; i++) {
                if (child[i] != null) {
                    return true;
                }
            }
            return false;
        } else {
            char c = prefix.charAt(0);
            if (child[c - 97] == null) {
                return false;
            }
            return child[c - 97].startsWith(prefix.substring(1));
        }
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */