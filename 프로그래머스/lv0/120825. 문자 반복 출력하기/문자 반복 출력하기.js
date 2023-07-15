function solution(my_string, n) {
    let answer = '';
    let arr = []
    for(i = 0; i < my_string.length; i++){
        for(j = 1 ; j <= n; j++){
            arr.push(my_string[i])
        }
    }
    answer = arr.join('')
    return answer;
}