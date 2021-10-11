//sOAL 01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(ar) {
  return ar.reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//SOAL 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  let avr = total / arr.length;
  let j = 0;
  let c = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > avr) {
      c.push(arr[j]);
    }
  }
  return c;
}
// console.log(getAverage(arr1).length);
console.log(
  "Ada " +
    getAverage(arr1).length +
    " bilangan yang melebihi rata-rata yaitu " +
    getAverage(arr1)
);
console.log(
  "Ada " +
    getAverage(arr2).length +
    " bilangan yang melebihi rata-rata yaitu " +
    getAverage(arr2)
);

//SOAL 03
function flatten(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}
const arr = flatten([[10], [9, 7, 1], [2, 8]]);
// console.log(c); //![ 10, 9, 7, 1, 2, 8 ]

function searchInArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      let d = arr.indexOf(arr[i]);
      return d;
    }
  }
}

// console.table(arr);
// console.log(arr[1]);
console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
