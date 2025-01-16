// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// sor1
function solution(numbers) {
    let sum = []

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            sum.push(numbers[i] + numbers[j])
        }
    }
    let answer = [...new Set(sum)]
    answer.sort((a, b) => a - b)
    
    return answer;
}
