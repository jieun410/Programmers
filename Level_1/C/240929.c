// ## 자연수 뒤집어 배열로 만들기
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12932

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(long long n) {
    int* answer = (int*)malloc(sizeof(int)*12);
    for(int i=0; n!=0; i++){
        answer[i]=n%10;
        n/=10;
    }
    return answer;
}
