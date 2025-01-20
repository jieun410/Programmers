// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    for (let i = 0; i < num.length; i++) {
        let arr = answer.split(num[i]);
        answer = arr.join(i);
    }
    return parseInt(answer, 10);
}
