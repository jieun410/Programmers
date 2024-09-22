// ## 문자열 반복해서 출력하기
// ## https://school.programmers.co.kr/learn/courses/30/lessons/181950
#include <stdio.h>
#define LEN_INPUT 11

int main(void) {
    char s1[LEN_INPUT];
    int a;
    scanf("%s %d", s1, &a);
    for(int i = 1; i <= a; i++) {
        printf(s1);
    }
    return 0;
}