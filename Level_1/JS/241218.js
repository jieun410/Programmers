// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수일 때, 약수는 홀수
            answer -= i;
        }
        else {
            answer += i;
        }
    }
    return answer;
}
