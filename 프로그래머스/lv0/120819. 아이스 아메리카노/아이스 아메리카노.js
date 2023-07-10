function solution(money) {
    var answer = [];
    let num = Math.floor(money/5500)
    let changes = money - 5500 *num
    answer.push(num);
    answer.push(changes);
    return answer;
}