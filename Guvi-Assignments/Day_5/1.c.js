//Sum of all numbers in an Array

let array = [1, 2, 3, 4, 5, 6];
let sum = 0;
(function (arr) {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
})

    (array);