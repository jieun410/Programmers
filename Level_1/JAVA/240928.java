// ## 문자열 내 p와 y의 개수
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12916

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int p = 0;
        int y = 0;
        
        s = s.toLowerCase();
        
        for(int i = 0; i < s.length(); i++) {
            char count = s.charAt(i);
            
            if(count == 'p') {
                p++;
            }
            else if (count == 'y'){
                y++;
            }
        }
        answer = p == y ? true : false ;

        return answer;
    }
}