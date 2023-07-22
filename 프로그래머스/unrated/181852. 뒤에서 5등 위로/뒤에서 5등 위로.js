function solution(num_list) {
    let answer = [];
    let new_list = num_list.sort((a,b)=>{
        return a - b;
    })
    new_list.splice(0,5)
    return new_list;
}