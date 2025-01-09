// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let str = n.toString(3);
    let reStr = str.split("").reverse().join("");

    return parseInt(reStr, 3);
}