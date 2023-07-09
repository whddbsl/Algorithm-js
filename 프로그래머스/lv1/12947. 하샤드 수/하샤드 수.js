function solution(n) {
    var x = String(n); // 숫자를 문자열로 변환
    const arr = Array.from(x); // 문자열을 배열로 변환
    var sum = 0; // 자릿수 합 계산
  for (i=0; i < arr.length; i++){
    sum += Number(arr[i]); // 각 요소를 숫자로 변환하여 더함
  }
  if(n%sum == 0){
    return true;
  }
  else{
    return false;
  }
}

