// ## 정수 제곱근 판별
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12934

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(long long n) {
    long long answer = 0;
    long long num = sqrt(n); //sqrt() : 제곱근 계산
    if(num * num == n) {
        answer = pow(num+1, 2); //pow() : y의 거듭제곱에 대한 x의 값
    }
    else{
        answer = -1;
    }
    return answer;
}