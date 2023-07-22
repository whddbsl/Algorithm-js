function solution(numbers) {
    let answer = 0;
    answer = numbers.sort((a,b)=>{
        return b-a
    })
    if(answer[0] * answer[1] > answer.at(-1) * answer.at(-2)){
        answer = answer[0] * answer[1];
    }else{
        answer = answer.at(-1) * answer.at(-2)
    }
    return answer;
}