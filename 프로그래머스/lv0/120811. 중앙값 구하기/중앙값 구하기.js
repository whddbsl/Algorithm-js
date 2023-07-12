function solution(array) {
    let answer = 0;
    let mid = Math.floor(array.length / 2) + 1
    let sort = array.sort((a,b)=>a-b)
    answer = sort[mid-1]
    return answer;
}