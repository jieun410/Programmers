// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    let circulate = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let max = [0, 0];

    circulate.forEach(([w, h]) => {
        if(w > max[0]) {
            max[0] = w;
        }
        if(h > max[1]) {
            max[1] = h;
        }        
    });
    return max[0]*max[1];
}