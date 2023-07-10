function solution(dot) {
    let answer = 0;
    let x = dot[0];
    let y = dot[1];
    if(x > 0){
        if(y > 0){
            return 1;
        }
        else{
            return 4;
        }
    }else{
        if(y > 0){
            return 2;
        }else{
            return 3;
        }
    }
    return answer;
}