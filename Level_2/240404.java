// // ## 최댓값과 최솟값
// // ## https://school.programmers.co.kr/learn/courses/30/lessons/12939

// import java.util.*;

// class Solution {
//     public String solution(String s) {
        
//         String[] num = s.split(" ");
//         int[] number = new int[num.length]; 
            
//         for(int i = 0; i < num.length; i++) {
//             number[i] = Integer.parseInt(num[i]);
//         }
        
//         Arrays.sort(number);
            
//         int min = number[0];
//         int max = number[num.length - 1];
        
//         return min + " " + max;
//     }
// }