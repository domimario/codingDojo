function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    // your code here!

    let headCount = 0;
    let attempts = 0;
    let maxAttempts = 100;

    while (headCount < 5 && attempts <= maxAttempts) {
      attempts++;
      let result = tossCoin();
      console.log({ result }, "was fliped");

      if (result === "heads") {
        headCount++;
      } else {
        headCount = 0;
      }
    }

    if (attempts <= maxAttempts) {
      resolve("it took", { attempts }, 'tries to flip five "heads"');
    } else {
      reject("Attemptes have exceeded ${maxAttempts} flips");
    }
  });
}

fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
