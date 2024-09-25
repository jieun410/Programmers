// ## 나머지가 1이 되는 수 찾기
// ## https://school.programmers.co.kr/learn/courses/30/lessons/87389
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    for(int i = 1; i <= n; i++) {
        if(n % i == 1) {
            answer = i;
            break;
        } 
    }
    return answer;
}

// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// numbers_len은 배열 numbers의 길이입니다.
int solution(int numbers[], size_t numbers_len) {
    int answer = 0;
    for(int i = 0; i < numbers_len; i++) {
        answer += numbers[i];
    }
    return 45 - answer;
}