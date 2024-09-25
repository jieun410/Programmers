// ## 배열 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/120821

import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        int[] backarr = new int[num_list.length];
        for(int i = 0; i < num_list.length; i++) {
                backarr[num_list.length - i - 1] = num_list[i];
            }
        return backarr;
    }
}