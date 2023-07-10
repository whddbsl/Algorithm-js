function solution(a, b) {
    var answer = 0;
    let big, small;
    if(a - b > 0){
        big = a;
        small = b;
    } else{
        big = b;
        small = a;
    }
    let diff = big - small
    for (i = 0 ; i <= diff; i++ ){
        answer += small
        small++
    }
    return answer;
}