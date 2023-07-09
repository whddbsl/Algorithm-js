function solution(numbers) {
    var answer = 0;
    let sum = 0;
    let n = numbers.length
    for(i=0 ; i < n; i++){
        sum += numbers.pop()    
    }
    answer = sum / n;
    return answer;
}