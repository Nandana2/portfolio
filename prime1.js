let num = 7;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is prime no");
} else {
  console.log(num + " is not prime no");
}






function Prime(num) {
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is not a prime number");
  }
}
Prime(7);
Prime(10);

