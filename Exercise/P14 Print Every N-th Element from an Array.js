function nthElement(array, number) {
    let output = [];
   for (i = 0; i < array.length; i += number) {
      output.push(array[i])
   }

return output;
}



// 0 1  2  3 4
// 5 20 31 4 20 
 
//      0  0+2=2  2+2=4
//      0  2   4
// 2 -> 5, 31, 20