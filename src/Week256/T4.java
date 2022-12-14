package Week256;

public class T4 {
    public int numberOfUniqueGoodSubsequences(String binary) {
        int res = 0;
        int cum = 0;
        for (int i = 0; i < binary.length(); i++) {
            res++;
            res += cum;
            cum *= 2;
            if (binary.charAt(i) != '0') {
                cum++;
            }
        }
        return res;
    }
}
