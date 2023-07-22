function solution(cipher, code) {
    let answer = '';
    let b = 2
    for(i = code ; i <= cipher.length;  i = code * b++){
        answer+=cipher[i-1];
        
    }
    return answer;
}