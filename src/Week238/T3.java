package Week238;

public class T3 {
    public int longestBeautifulSubstring(String word) {
        int max = 0;
        int state = -1;
        int cur = 0;

        for (char i : word.toCharArray()) {
            if (state == -1) {
                if (i == 'a') {
                    cur++;
                    state++;
                }
            } else if (state == 0) {
                if (i == 'a') {
                    cur++;
                } else if (i == 'e') {
                    cur++;
                    state++;
                } else {
                    cur = 0;
                    state = -1;
                }
            } else if (state == 1) {
                if (i == 'e') {
                    cur++;
                } else if (i == 'i') {
                    cur++;
                    state++;
                } else if (i == 'a') {
                    cur = 1;
                    state = 0;
                } else {
                    cur = 0;
                    state = -1;
                }
            } else if (state == 2) {
                if (i == 'i') {
                    cur++;
                } else if (i == 'o') {
                    cur++;
                    state++;
                } else if (i == 'a') {
                    cur = 1;
                    state = 0;
                } else {
                    cur = 0;
                    state = -1;
                }
            } else if (state == 3) {
                if (i == 'o') {
                    cur++;
                } else if (i == 'u') {
                    cur++;
                    state++;
                } else if (i == 'a') {
                    cur = 1;
                    state = 0;
                } else {
                    cur = 0;
                    state = -1;
                }
            } else if (state == 4) {
                if (i == 'u') {
                    cur++;
                } else if (i == 'a') {
                    max = Math.max(cur, max);
                    cur = 1;
                    state = 0;
                } else {
                    max = Math.max(cur, max);
                    cur = 0;
                    state = -1;
                }
            }

        }

        if (state == 4) {
            max = Math.max(cur, max);
        }

        return max;
    }
}
