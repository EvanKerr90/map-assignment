var words = ["ground", "control", "to", "major", "tom"];

//map(words, function(word) {
  //return word.length;
//});

//map(words, function(word) {
  //return word.toUpperCase();
//});

//map(words, function(word) {
  //return word.split('').reverse().join('');
//});

function map(arr, fun) {
var temp = []
  arr.forEach(function(element) {
  temp.push(fun(element))
  })
return temp;
}

var newArray = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(newArray)

