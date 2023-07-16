function solution(myString, pat) {
    let answer = 0;
    let newString = []
    for(i=0; i<myString.length; i++){
        if(myString[i] == 'A'){
            newString.push('B');
        }else{
            newString.push('A');
        }
    }
    
    if(newString.join('').includes(pat)){
        answer = 1;
    }else{
        answer = 0;
    }
    
    return answer;
}