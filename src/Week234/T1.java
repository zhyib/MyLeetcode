package Week234;

import java.util.HashSet;

public class T1 {
    public int numDifferentIntegers(String word) {
        HashSet<String> set = new HashSet<>();
        StringBuilder temp = new StringBuilder();
        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) < 48 || word.charAt(i) > 57) {
                if (!temp.toString().equals("")) {
                    while (temp.charAt(0) == '0' && temp.length() > 1) {
                        temp.deleteCharAt(0);
                    }
                    set.add(temp.toString());
                    temp = new StringBuilder();
                }

            } else {
                temp.append(word.charAt(i));
            }
        }
        if (!temp.toString().equals("")) {
            while (temp.charAt(0) == '0' && temp.length() > 1) {
                temp.deleteCharAt(0);
            }
            set.add(temp.toString());
        }
        return set.size();
    }
}
