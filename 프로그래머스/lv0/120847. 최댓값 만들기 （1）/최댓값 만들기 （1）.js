function solution(numbers) {
    var answer = 0;
    let sortNum = numbers.sort(function(a,b){
        return b - a;
    })
    answer = sortNum[0] * sortNum[1];
    return answer;
}