// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// sol1
function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;
}


// sol 2
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}