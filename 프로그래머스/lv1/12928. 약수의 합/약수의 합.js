var sum = 0;
function solution(n) {
    for (i=1; i <= n; i+=1)
        {
            if(n%i==0){
                sum += i
            }
        }
    return sum;
}
