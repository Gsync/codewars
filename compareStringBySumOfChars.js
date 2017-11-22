// Compare two strings by comparing the sum of their values(ASCII character code).
// For comparing treat all letters as UpperCase.

//Null - Strings should be treated as if they are empty strings.
// If the string contains other characters than letters, treat the whole string as it would be empty.

//     Examples:

// "AD", "BC" -> equal
// "AD", "DD" -> not equal
// "gf", "FG" -> equal
// "zz1", "" -> equal
// "ZzZz", "ffPFF" -> equal
// "kl", "lz" -> not equal
// null, "" -> equal

// Your method should return true, if the strings are equal and false if they are not equal.

function compare(s1, s2) {
    let [charSum1, charSum2] = [0,0];
    let regex1 = /\d/;
    regex1.test(s1) || s1 === null ? s1="": "";
    regex1.test(s2) || s2 === null ? s2="": "";
    s1 = s1.replace(/\W/g, '');
    s2 = s2.replace(/\W/g, '');
    for (let i=0;i<s1.length; i++) {
        charSum1 += s1.toUpperCase().charCodeAt(i);
    }
    for (let i = 0; i < s2.length; i++) {
        charSum2 += s2.toUpperCase().charCodeAt(i);
    }
    console.log(charSum1, charSum2);
    return charSum1 === charSum2 ? true : false;
}

console.log(compare("AD", "BC"));
console.log(compare("AD", "DD"));
console.log(compare("gf", "FG"));
console.log(compare("zz1", ""));
console.log(compare("ZzZz", "ffPFF"));
console.log(compare("kl", "lz"));
console.log(compare(null, ""));
console.log(compare("##", "1176"));