// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    let answer = "";
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            answer += "박";
        }
        else {
            answer += "수";
        }
    }
    return answer;
}