function findShort(s) {
    var s = s.split(' ');
var word = s.reduce(function (a, b) {
    if (a.length < b.length) {
        return a;
    }
   return b;
    
});
return console.log(word.length);
}

findShort("hello worldd go33 gownddd h2ss");
findShort("bitcoin take over the world maybe who knows perhaps");