function solution(arr, n) {
    let len = arr.length;
    if(len % 2 === 1){
        for(i=0; i < len; i += 2){
            arr[i] = arr[i] +n;
        }
    }else{
        for(i=1; i < len; i += 2){
            arr[i] = arr[i] +n;
        }
    }
    return arr;
}