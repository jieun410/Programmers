// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    let answer = [[]];
    for(let i = 0; i < arr1.length; i++) {
        ansewr[i] = [];
        for(let j = 0; j <arr1[0].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }   
    return answer;
}