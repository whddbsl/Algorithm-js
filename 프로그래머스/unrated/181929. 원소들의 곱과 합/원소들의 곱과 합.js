function solution(num_list) {
    var answer = 0;
    let multi = 1;
    let sumSquard = 0
    let sum = 0
    for (i = 0; i < num_list.length; i++){
        multi = multi * num_list[i]
    }
    for (i = 0; i < num_list.length; i++){
        sum += num_list[i]
    }
    sumSquard = sum ** 2
    if(multi > sumSquard){
        answer = 0;
    }else{
        answer = 1;
    }
    return answer;
}