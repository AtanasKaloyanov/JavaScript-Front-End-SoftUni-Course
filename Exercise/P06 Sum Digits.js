function sumDigits(number) {
  // 1. Converting the given number into string. Than the array into an array of chars
  let array = number.toString().split('');

  // 2. Iterating over each char, converting the char into a number and than add it to the sum
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    
     let currentElement = Number.parseInt(array[i]);

     sum += currentElement;
  }
  
  // 3. Print the sum
  console.log(sum);
}

 

