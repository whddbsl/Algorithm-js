function solution(n) {
    let answer = 0;
    let array = String(n).split('')
    let sum = 0;
    for(i=0 ; i < array.length; i++){
        sum += +array[i];
    }
    answer = sum;
    return answer;
}