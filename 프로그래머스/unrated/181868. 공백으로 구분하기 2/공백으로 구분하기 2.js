function solution(my_string) {
    let answer = my_string.split(' ').filter(item => item!=='')
    
    return answer;
}