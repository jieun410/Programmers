// ## 짝수의 합
// ## https://school.programmers.co.kr/learn/courses/30/lessons/120831

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    for(int i = 0; i <= n; i++ ) {
        if(i % 2 == 0 ) {
            answer += i;
        }    
    }

    return answer;
}