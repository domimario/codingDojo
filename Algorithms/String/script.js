function removeBlanks(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }

  return result;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//------------------------------------------------------------------------------------------------

function getDigits(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(Number(char))) {
      result += char;
    }
  }

  return Number(result);
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//------------------------------------------------------------------------------------------------

function acronym(str) {
  const words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word !== "") {
      result += word[0].toUpperCase();
    }
  }

  return result;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

//------------------------------------------------------------------------------------------------

function countNonSpaces(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }

  return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

//------------------------------------------------------------------------------------------------

function removeShorterStrings(arr, value) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= value) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(
  removeShorterStrings(
    ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
    4
  )
);
console.log(
  removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
);

//------------------------------------------------------------------------------------------------
