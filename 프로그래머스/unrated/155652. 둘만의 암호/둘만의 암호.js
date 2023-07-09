function solution(s, skip, index) {
    // 답 제출
   var answer = [] 
   // 알파벳 배열
   const alp =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // 입력받은 문자열 배열로 
    var arr = s.split("");
    // 건너 뛸 문자열 배열로
    var sk = skip.split("");
    // 알파벳 문자열에서 건너 뛸 문자열 제거
    var new_alp = alp.filter(x=> !sk.includes(x))
   for (i=0; i < arr.length; i++){
        var inx = (new_alp.indexOf(arr[i])+index)%new_alp.length;
       answer.push(new_alp[inx]);
   }
    return answer.join("");
}

