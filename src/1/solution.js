function sumOfMultiplesOf3Or5(num) {
    arr = [];
    for (i=0; i<num; i++) {
        if (i%3 == 0 || i%5 == 0) {
            arr.push(i);
        }
    }
    if (arr.length == 0) {
        return 0;
    } else {
        return arr.reduce(function(a, b) {
            return a + b;
        });
    }
}

console.log(sumOfMultiplesOf3Or5(100)); //2318
