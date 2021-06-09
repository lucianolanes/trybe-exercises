const promise = new Promise((resolve, reject) => {
  const arrayNumbers = Array.from(
    { length: 10 },
    () =>  Math.floor(Math.random() * 50) + 1
  );

    const sum = arrayNumbers.map((number) => number * number)
    .reduce((acc, number) => acc + number);

    (sum < 8000) ? resolve() : reject("É mais de oito mil! Essa promise deve estar quebrada!");
})
.then((number) => [2, 3, 5, 10].map((num) => number / num))
.then(array => array.reduce((number, acc) => number + acc, 0))
.catch((error) => console.log(error));