function solution(numbers) {
    var sum = 0
    for (i=0; i< numbers.length; i++){
        for (j=0; j<10; j++){
            if(numbers[i]==j){
                sum += j
            }
        }
    }
    return 45-sum;
}