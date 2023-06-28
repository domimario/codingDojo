function reverseArrayInPlace(arr) {
  const length = arr.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr));

//-------------------------------------------------------------------------------

function rotateArr(arr, shiftBy) {
  const length = arr.length;
  const shifts = Math.abs(shiftBy) % length;

  if (shiftBy === 0 || shifts === 0) {
    return arr;
  }

  const reverse = shiftBy > 0;

  function reverseArray(start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  function rotateArray(start, end) {
    if (reverse) {
      reverseArray(start, length - 1);
      reverseArray(0, end);
      reverseArray(0, length - 1);
    } else {
      reverseArray(0, start - 1);
      reverseArray(start, length - 1);
      reverseArray(0, length - 1);
    }
  }

  if (reverse) {
    rotateArray(shifts, length - 1);
  } else {
    rotateArray(0, length - 1 - shifts);
  }

  return arr;
}
const arr1 = [1, 2, 3];
console.log(rotateArr(arr1, 1));

const arr2 = [1, 2, 3, 4, 5];
console.log(rotateArr(arr2, -2));

//------------------------------------------------------------------------------

function arrConcat(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  return newArr;
}
const arr5 = ["a", "b"];
const arr8 = [1, 2];
const concatenatedArray = arrConcat(arr5, arr8);
console.log(concatenatedArray);

//------------------------------------------------------------------------------