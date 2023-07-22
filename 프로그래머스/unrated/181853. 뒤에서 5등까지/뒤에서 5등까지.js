function solution(num_list) {
    let new_list = num_list.sort((a,b) => {
        return a - b;
    })
    new_list.length = 5;
    return new_list;
}