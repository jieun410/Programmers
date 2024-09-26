//  ## 문자열을 정수로 바꾸기
//  ## https://school.programmers.co.kr/learn/courses/30/lessons/12925

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(const char* s) {
    int answer = 0;
    answer = atoi(s); // 문자 스트링을 정수값으로 변환
    return answer;
}