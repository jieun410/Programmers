// ## 짝수와 홀수
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12937
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int num) {
    char* answer = (char*)malloc(5) ;
    answer= (num % 2 == 0) ?  "Even" : "Odd";
return answer;
}