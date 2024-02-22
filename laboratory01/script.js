function isOdd(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 !== 0) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

isOdd(20)
  .then((result) => {
    console.log(`The result is: ${result}`);
  })
  .catch((error) => {
    console.error(`The result is: ${error}`);
  });

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
  isOdd(number)
    .then((result) => {
      console.log(`${number}  is Odd Number `);
    })
    .catch((error) => {});
}

function getRandomCharacter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz";
      let i = Math.floor(Math.random() * characters.length);
      let char = characters[i];
      resolve(char);
    }, 500);
  });
}

async function runRandomCharacters() {
  let char = await getRandomCharacter();
  console.log(`Random Character: ${char}`);
}
runRandomCharacters();

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let value = Math.random();
      reject(value);
    }, 500);
  });
}

async function runData() {
  try {
    let Data = await getData();
    console.log(Data);
  } catch (error) {
    console.error(`Data Error: ${error}`);
  }
}
runData();

function rejectResolve() {
  return new Promise((resolve, reject) => {
    let i = 0;
    let j = setInterval(() => {
      let value = Math.random();
      if (i % 2 !== 0) {
        reject(value);
      } else {
        resolve(value);
      }
      i++;
      if (i === 2) {
        clearInterval(j);
      }
    }, 1000);
  });
}

async function runRejectResolve() {
  try {
    let result = await rejectResolve();
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

runRejectResolve();
