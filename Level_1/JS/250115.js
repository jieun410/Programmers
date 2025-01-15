// 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
    let answer = [-1];
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i -1; j >= 0; j--) {
            if(s[i] === s[j]) {
                answer.push(i - j)
                break
            }
            if(j === 0) {
                answer.push(-1)
            }
        }
    }
        return answer;
}