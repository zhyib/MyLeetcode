package Week233;

public class T4 {
    // 1803 - 统计异或值在范围内的数对有多少
    // 源码出处
    // https://leetcode-cn.com/problems/count-pairs-with-xor-in-a-range/solution/java-01zi-dian-shu-by-zanyjoker-tiwd/
    // 我的笔记
    // https://zhyib.github.io/20210322/LeetCode-1803-%E7%BB%9F%E8%AE%A1%E5%BC%82%E6%88%96%E5%80%BC%E5%9C%A8%E8%8C%83%E5%9B%B4%E5%86%85%E7%9A%84%E6%95%B0%E5%AF%B9%E6%9C%89%E5%A4%9A%E5%B0%91/#more
    public int countPairs(int[] nums, int low, int high) {
        // [0, high] - [0, low - 1] => [low, high]
        return calc(nums, high) - calc(nums, low - 1);
    }

    public int calc(int[] nums, int border) {
        Trie root = new Trie();
        int ans = 0;
        for (int num : nums) {
            Trie u = root;
            int now = 0;
            int j;
            for (j = 16; j >= 0; --j) {
                int cur = num >> j & 1;     // 从最高位依次
                if (now + (1 << j) > border) {
                    // xxx1000 > border
                    // => xxx1000 > border = xxx0xxx
                    // => border 在该位上为0
                    if (u.children[cur] != null) {
                        // cur == 叶节点index
                        // 该位异或结果 xor == 0
                        // 继续循环，有可能产生 xor < border
                        u = u.children[cur];
                    } else {
                        // 异或结果 xor == 0 叶节点 为空 || 该位 xor == 1
                        // => 为空表示后续无数字可以使 xor <= border
                        // => xor == 1，border 在该位上为0，后续必定 xor > border
                        break;
                    }
                } else if (now + (1 << j) <= border) {
                    // xxx1000 <= border
                    // => xxx1000 <= border = xxx1xxx
                    if (u.children[cur] != null) {
                        // cur == 叶节点index
                        // => 该位异或结果 xor == 0
                        // xor == 0, border该位 == 1,
                        // 所以在这节点上计算产生的xor必定全部小于border
                        // 子节点非空，加上子节点记录的数量cnt
                        ans += u.children[cur].cnt;
                    }
                    if (u.children[cur ^ 1] != null) {
                        // cur != 叶节点index
                        // => 该位异或结果 xor == 1
                        // xor == 0, border该位 == 1
                        // 继续循环，有可能产生 xor < border
                        u = u.children[cur ^ 1];
                        now += (1 << j);
                    } else {
                        // 该位异或结果 == 1
                        // 但是后面没有可以运算的数字了，可使xor < border
                        break;
                    }
                }
            }

            // 访问到叶节点，加上最后的数量
            if (j == -1) ans += u.cnt;

            // 插入新节点
            u = root;
            for (j = 16; j >= 0; --j) {
                int cur = num >> j & 1;
                if (u.children[cur] == null) {
                    u.children[cur] = new Trie();
                }
                u = u.children[cur];
                u.cnt++;    // cnt 表示经过所有会经过该点的串总数
            }
        }
        return ans;
    }

    static class Trie {
        Trie[] children;
        int cnt;

        Trie() {
            children = new Trie[2];
            cnt = 0;
        }
    }
}
