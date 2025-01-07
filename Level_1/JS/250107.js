// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    var answer = '';
    var words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j % 2 == 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length - 1) {
            answer += ' '; // 단어 사이 공백
        }
    }
    return answer;
}

// 테스트 코드
let test1 = "hello world";
console.log(solution(test1)); 

let test2 = "javascript";
console.log(solution(test2)); 

let test3 = "This is a test";
console.log(solution(test3));
