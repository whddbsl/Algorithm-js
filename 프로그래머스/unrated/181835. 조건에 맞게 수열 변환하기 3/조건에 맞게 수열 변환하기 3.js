function solution(arr, k) {
    var answer = [];
    if(k % 2 === 0){
      arr.forEach(item => answer.push(item + k));
    }else{
        arr.forEach(item => answer.push(item * k))
    }
    return answer;
}