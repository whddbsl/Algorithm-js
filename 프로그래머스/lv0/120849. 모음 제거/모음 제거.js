function solution(my_string) {
    let answer = ''
    
    for(i=0; i<my_string.length; i++){
    if(my_string[i]==='a')
        continue;
    else if(my_string[i]==='e')
        continue;
    else if(my_string[i]==='i')
        continue;
    else if(my_string[i]==='o')
        continue;
    else if(my_string[i]==='u')
        continue;
    else answer += my_string[i]
  }
    return answer;
}