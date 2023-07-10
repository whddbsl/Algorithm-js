function solution(n)
{
    var answer = 0;
    let str = n.toString()
    for(i = 0; i < str.length; i++){
        answer += Number(str[i])
    }
    
    return answer;
}