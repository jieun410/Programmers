// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935\


// sol1
function solution(arr) {
    var answer = [];
    if(arr.length === 1) {
        return [-1];
    }

    const min = Math.min(...arr);
    const idx = arr.indexOf(min);
    arr.splice(idx, 1);

    return arr;
}

// sol2
function solution(arr) {
    arr.plice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length < 1)
        return [-1];
    return arr;
}