function solution(num_list) {
    var answer = 0;
    let even = 0;
    let odd = 0
    for(i=0; i<num_list.length; i++){
        if(i % 2 == 0){
            odd += num_list[i]
        }else{
            even += num_list[i]
        }
    }
    if(odd > even){
        answer = odd;
    }else{
        answer = even;    
    }
    return answer;
}