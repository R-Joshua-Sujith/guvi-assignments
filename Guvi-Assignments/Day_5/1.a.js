//1a Print Odd Numbers in an Array
let array = [1, 2, 3, 4, 5, 6];

(function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
})

    (array);