// 푸드 파이트 대회
// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    var result = '', leftSide = '', rightSide = '';

    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 == 0) {
            leftSide += i.toString().repeat(food[i] / 2); // 짝수
        } else {
            leftSide += i.toString().repeat((food[i] - 1) / 2); // 홀수
        }
    }
    rightSide = leftSide.split('').reverse().join('');

    result = leftSide + "0" + rightSide; // 물을 기준으로 왼쪽 오른쪽 배분...
    return result;
}