// ## 문자열 출력하기
// ## https://school.programmers.co.kr/learn/courses/30/lessons/181952
#include <stdio.h>
#define LEN_INPUT 1000001

int main(void) {
    char s1[LEN_INPUT];
    scanf("%s", s1);
    printf("%s", s1);
    return 0;
}

//a와 b 출력하기
//https://school.programmers.co.kr/learn/courses/30/lessons/181951
#include <stdio.h>

int main(void) {
    int a;
    int b;
    scanf("%d %d", &a, &b);
    printf("a = %d\n", a);
    printf("b = %d", b);
    return 0;
}