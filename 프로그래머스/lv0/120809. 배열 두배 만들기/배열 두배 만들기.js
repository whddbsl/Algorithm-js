function solution(numbers) {
    var answer = [];
    let double = numbers.forEach((item)=>{
        item *= 2;
        answer.push(item)
    })
    
    return answer;
}