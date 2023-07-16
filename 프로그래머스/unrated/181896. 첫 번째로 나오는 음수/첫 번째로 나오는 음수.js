function solution(num_list) {
    let answer = 0;
    for(i = 0; i < num_list.length; i++){
        if(num_list[i] < 0){
            answer = num_list.indexOf(num_list[i]);
            break;
        }else{
            answer = -1;
        }
    }
    return answer;   
}