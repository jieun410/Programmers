// ## 나이 출력
// ## https://school.programmers.co.kr/learn/courses/30/lessons/120820
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int age) {
    int answer = 0;
    if(0 < age && age <= 120) {
        answer = (2022 - age) + 1;
    }
    return answer;
    
}

// ## 나머지 구하기
// ## https://school.programmers.co.kr/learn/courses/30/lessons/120810
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    int answer = -1;
    answer = num1 % num2;
    return answer;
}