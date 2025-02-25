// K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    var answer = [];
    for (let s = 0; s < commands.length; s++){
        const [i, j, k] = commands[s]
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
    }
    return answer;
}