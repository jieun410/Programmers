// ## 자릿수 더하기
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12931

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int sum = 0;
    scanf("%d", &n);

    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    
    return sum;
}
ddddd