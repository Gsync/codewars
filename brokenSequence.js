// You have a sequence of positive numbers starting with 1, but one number is missing!

// Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

// In short: an invalid sequence(a string with non numeric character) must return 1, an already complete(or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

// Note that the input may be with random order.

// E.g.

// console.log(findMissingNumber("1 3 2 5")); // returns 4, because 4 is missing
// console.log(findMissingNumber("1 2 3 4")); // returns 0, because the sequence isn't broken
// console.log(findMissingNumber("1 5")); // returns 2, because the sequence is missing more than one number and 2 is the lowest between 2, 3 and 4
// console.log(findMissingNumber("2 1 4 3 a")); // returns 1, because it's an invalid sequence. in this case, it's invalid because contain a non numerical character
// console.log(findMissingNumber('')); // return 0
// console.log(findMissingNumber('a a 2 4 6 8 5')); // return 1
console.log(findMissingNumber('22 24 6 26 7 23 29 14 4 a 17 12 9 10 1 2 20 28 13 19 16 a a a 11 a 8 27'));

function findMissingNumber(sequence) {
    if (sequence === '') return 0;
    let arr = sequence.split(" ").sort().map(a => parseInt(a));
    arr.map((a,i) => {
        if (isNaN(a)) {
            return 1;
        }
    });
    for (let i=0; i<arr.length; i++) {
        //console.log(+arr[i], i+1);
        if (!(+arr[i] === i + 1)) {
            console.log(i);
            return i+1;
        }
    }
    return 0;
}

// function findMissingNumber(str) {
//     if (str == '') return 0;
//     newArr = str.split(' ').sort((a, b) => a - b);
//     for (var i = 0; i < newArr.length; i++) {
//         if (!(+newArr[i] === i + 1)) return i + 1;
//     }
//     return 0;
// }