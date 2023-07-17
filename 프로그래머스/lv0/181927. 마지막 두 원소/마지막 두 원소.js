function solution(num_list) {
    let lastNum_index = num_list.length-1;
    if(num_list[lastNum_index] > num_list[lastNum_index-1]){
        num_list.push(num_list[lastNum_index] - num_list[lastNum_index-1]);
    }else{
        num_list.push(num_list[lastNum_index] * 2);
    }
    return num_list;
}