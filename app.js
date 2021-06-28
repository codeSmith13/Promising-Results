slowMath

  .add(6, 2)
  .then((resolve) => {
    console.log(resolve);
    return slowMath.multiply(resolve, 2);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.divide(resolve, 4);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.subtract(resolve, 3);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.add(resolve, 98);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.remainder(resolve, 2);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.multiply(resolve, 50);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.remainder(resolve, 40);
  })

  .then((resolve) => {
    console.log(resolve);
    return slowMath.add(resolve, 32);
  })

   .then((resolve) => {
    console.log(`The final result is ${resolve}`);
  })

  .catch((err) => console.log(err));

// async function math() {
//   try {
//     let wait = await slowMath.add(6, 2);
//     console.log(wait);
//     wait = await slowMath.multiply(wait, 2);
//     console.log(wait);
   
//     wait = await slowMath.divide(wait, 4);
//     console.log(wait);
   
//     wait = await slowMath.subtract(wait, 3);
//     console.log(wait);
   
//     wait = await slowMath.add(wait, 98);
//     console.log(wait);
   
//     wait = await slowMath.divide(wait, 2);
//     console.log(wait);
   
//     wait = await slowMath.multiply(wait, 50);
//     console.log(wait);
   
//     wait = await slowMath.remainder(wait, 40);
//     console.log(wait);
   
//     wait = await slowMath.add(wait, 32);
//     console.log(`The result ${wait}`);
//   }
  
//   catch (error) {
//     console.log(err);
//   }
// }

// math();
