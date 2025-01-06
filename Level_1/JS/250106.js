// 크기가 작은 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    let answer = 0;
    for(let i = 0; i < t.length - p.length + 1; i++) {
        let num = t.slice(i, i + p.length);
        if(num <= p) {
            answer++;
        }
    }
    return answer;
}