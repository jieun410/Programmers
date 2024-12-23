// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    let answer = true;
    if(s.length == 4 || s.length == 6) {
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i])) {      // is Not a Number
                answer = false;
                break;
            }
        }
    }
    else {
        answer = false; // 4 or 6이 아닌 경우
    }
    return answer;
}