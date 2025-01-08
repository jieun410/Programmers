// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let answer = 0, max = 0;
    d.sort((a,b) => a-b);
    
    for(let i = 0; i < d.length; i++) {
        answer++;
        max += d[i];

        if(max > budget) {
            answer--;
        }
    }
    return answer;
}