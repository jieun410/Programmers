// 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    var answer = 0;
    for(let i in a) {
        answer += a[i] * b[i];
    }
    return answer;
}