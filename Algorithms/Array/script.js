function pushFront(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = value;
  return arr;
}
console.log(pushFront([5, 7, 2, 3], 8));
console.log(pushFront([99], 7));

//-------------------------------------------------------------------------------------------------------------

function popFront(arr) {
  const removedValue = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(removedValue, "returned, with", arr, "printed in the function");
  return removedValue;
}
console.log(popFront([0, 5, 10, 15]));
console.log(popFront([4, 5, 7, 9]));

//-------------------------------------------------------------------------------------------------------------

function insertAt(arr, index, value) {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = value;
  return arr;
}
console.log(insertAt([100, 200, 5], 2, 311));
console.log(insertAt([9, 33, 7], 1, 42));

//-------------------------------------------------------------------------------------------------------------

function removeAt(arr, index) {
  const removedValue = arr[index];

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();

  console.log(removedValue, "returned, with", arr, "printed in the function");
  return removedValue;
}
console.log(removeAt([1000, 3, 204, 77], 1));
console.log(removeAt([8, 20, 55, 44, 98], 3));

//-------------------------------------------------------------------------------------------------------------

function removeDupes(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

console.log(removeDupes([-2, -2, 3.14, 5, 5, 10]));
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29]));

//-------------------------------------------------------------------------------------------------------------
