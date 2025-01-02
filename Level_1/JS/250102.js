// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

//sol 1
function gcd(a,b) {
    return b ? gcd(b, a%b) : Math.abs(a)
}

function solution(n, m) {
    let a = n > m ? n : m
    let b = n < m ? n : m
    let k = gcd(a, b)
    return [k, a*b/k]
}

// sol 2
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); 최대공약수
    const lcm = (a, b) => a * b / gcd(a, b); 최소공배수
    return [gcd(num1, num2), lcm(num1, num2)];
}