// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i])
        }
    }
    return answer;
}
    
// 테스트 코드
console.log(solution([1, 1, 3, 3, 0, 1, 1])); 
console.log(solution([4, 4, 4, 3, 3])); 
console.log(solution([1, 1, 1, 1, 1])); 
console.log(solution([1, 2, 3, 4, 5])); 
console.log(solution([5, 5, 5, 5, 5, 5]));  
console.log(solution([7, 3, 3, 2, 2, 1, 1, 1]));