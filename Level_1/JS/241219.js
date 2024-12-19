// 문자열 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    return s.split('').sort().reverse().join('');
}

// split => 문자열 쪼갬
// sort => 순차적 나열
// reverse => 반전
// join => 문자열로 바꿔 반환