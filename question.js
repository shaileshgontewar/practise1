let arr = [1, 2, 3, 4, 5, 6, 4, 5, 6, 1, 2, 4, 8, 6];
function uniqueArray(arr) {
  let result = [];
  let result1 = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    } else {
      result1.push(item);
    }
  });
  return { result1, result };
}
// console.log(uniqueArray(arr));
// console.log(arr.toSorted());

// !
var array = [
  [1, 2, 3],
  [4, 5, 6, [44, 55, 66]],
  [7, 8, 9],
];

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i],"1");
    if (Array.isArray(array[i])) {
      // console.log(array[i],"2");
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(flatten(array), "result");

