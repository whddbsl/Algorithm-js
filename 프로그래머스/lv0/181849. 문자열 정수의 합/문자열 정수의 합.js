function solution(num_str) {
    let answer = 0;
    for(i = 0; i< num_str.length; i++){
        answer += +num_str[i]
    }
    return answer;
}