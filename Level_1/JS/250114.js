// 시저암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = [];

    for(let i = 0; i < s.length; i++) {
        const ascNum = s.charCodeAt(i);

        if(ascNum === 32) {
            answer.push(' ');
        } // 공백

        if(ascNum > 64 && ascNum < 91) { //대문자
            if(ascNum + n > 90) {
                answer.push(String.fromCharCode(ascNum + n - 90 + 64));
            }
            else {
                answer.push(String.fromCharCode(ascNum + n));
            }
        } 
        else if(ascNum > 96 && ascNum < 123) { // 소문자
            if(ascNum + n > 122) {
                answer.push(String.fromCharCode(ascNum + n - 122 + 96));
            }
            else {
                answer.push(String.fromCharCode(ascNum + n));
            }
        }
    }
    return answer.join(''); //문자열 합침
}