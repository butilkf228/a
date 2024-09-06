function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }

const promises = [
    delayedPromise("qwqw", 1000),
    delayedPromise("qwqwwe", 1500),
    delayedPromise("qwqwa", 2000),
    delayedPromise("qwqwfd", 2500),
    delayedPromise("qwqwsx", 3000)
];

Promise.all(promises)
  .then((results) => {
    console.log("success");
    console.log(results);
  })
  .catch((error) => {
    console.error("error", error);
  });

function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
}

const randomPromises = [
    randomPromise("1"),
    randomPromise("1"),
    randomPromise("1"),
    randomPromise("1"),
    randomPromise("1")
];

Promise.all(randomPromises).then((results) => {
    console.log("success");
    console.log(results);
  });

Promise.race(randomPromises).then((fastestResult) => {
    console.log(fastestResult)
});

