function solution(n, k) {
    var answer = [];
    let max = Math.floor(n / k);
    for (i = 1 ; i <= max; i++){
        answer.push(k * i);
    }
    return answer;
}