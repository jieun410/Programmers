// ## 콜라츠 추측
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12943

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(long long num) {
    int answer = 0;
        
    for(int i = 0; i < 499; i++) {
        if(num % 2 == 0) {
            num /= 2;
        }
        else {
            num = (num * 3) + 1;
        }
        answer++;
        
        if(num == 1) {
            return answer;
        }
        
    }
    return -1;
    
}