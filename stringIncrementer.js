// Your job is to write a function which increments a string, to create a new string.If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

//     Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
/* Incomplete Solution */
// function incrementString(strng) {
//     const regex = /\d+$/g;
//     let newStr;
//     const d = strng.match(regex);
//     if (d != null) {
//         let snum = d[0].length;
//         let n = parseInt(d[0]);
//         let dnum = n.toString().length;
//         let regex2 = new RegExp(n + '$', 'g');
//         console.log(dnum, snum);
//         newStr = strng.replace(regex2, n + 1);
//     } else {
//         newStr = strng+1;
//     }
//     return newStr;
// }

function incrementString(strng) {
    var string = strng.replace(/[0-9]/g, '');

    var len = strng.length - string.length;

    var str = strng.slice(string.length) || "0";

    str = (parseInt(str) + 1).toString();

    while (str.length < len) {
        str = "0" + str;
    }

    return string.concat(str);
}

console.log(incrementString("foo")); // returns foo1
console.log(incrementString("foo000")); // returns foo001
console.log(incrementString("foo009")); // returns foo010
console.log(incrementString("foo23")); // returns foo24
console.log(incrementString("foo42")); // returns foo43
console.log(incrementString("foo9")); // returns foo10
console.log(incrementString("foo99")); // returns foo100