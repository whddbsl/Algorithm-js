function solution(my_string) {
    let answer = ''

    answer = my_string.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','')
    return answer;
}