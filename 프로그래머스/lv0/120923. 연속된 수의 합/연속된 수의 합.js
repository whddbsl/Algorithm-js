function solution(num, total) {
    var answer = [];
    let mid = total / num
    let item = mid - (num-1)/2;
    for (i = 0; i < num; i ++){
        answer.push(item+i);
    }
    return answer;
}