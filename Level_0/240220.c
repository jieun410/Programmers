// ## 짝수의 합
// ## https://school.programmers.co.kr/learn/courses/30/lessons/120831

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    for(int i = 0; i <= n; i++ ) {
        if(i % 2 == 0 ) {
            answer += i;
        }    
    }

    return answer;
}

// ## 각도기
// https://school.programmers.co.kr/learn/courses/30/lessons/120829
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int angle) {
    int answer = 0;
    if(0 < angle && angle < 90) {
        answer = 1;
    }
    else if (angle == 90) {
        answer = 2;
    }
    else if (90 < angle && angle < 180) {
        answer = 3;
    }
    else if(angle == 180) {
        answer = 4;
    }
    
    return answer;
}