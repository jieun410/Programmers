// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(price, money, count) {
    let total = 0;
    for(let i = 1; i <= count; i++) {
        total += i * price;   //총 금액
    }
    
    if(total <= money) {
        return 0;
    }
    else {
        return total - money;
    }
}