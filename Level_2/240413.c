// ## 피보나치 수
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12945
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    int n1 = 0;
    int n2 = 1;
    
    for(int i = 2; i <= n; i++) {
        answer = (n1 + n2) % 1234567;
        n1 = n2;
        n2 = answer;
    }
    return answer;
}
    