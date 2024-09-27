// ## 하샤드 수
// ## https://school.programmers.co.kr/learn/courses/30/lessons/12947


#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool solution(int num) {
    bool total = false;
    int sum = 0; 
    int x = num;
    while (x > 0) {
        sum += x % 10;
        x /= 10; 
    }
    if(num % sum == 0) {
        total = true;
    } 
    return total;
}