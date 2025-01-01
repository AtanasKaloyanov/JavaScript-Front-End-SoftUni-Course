function distanceCheck(x1, y1, x2, y2) {
   printResult(x1, y1, 0, 0);
   printResult(x2, y2, 0, 0);
   printResult(x1, y1, x2, y2);

   function printResult(x1, y1, x2, y2) {
      distance = distanceCompute(x1, y1, x2, y2);
      validOrInvalid = validCheck(distance);
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validOrInvalid}`);
   }

   function distanceCompute(x1, y1, x2, y2) {
      return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
   }

   function validCheck(distance) {
      isValid = Number.isInteger(distance);
   
      validOrInvalid = '';
      if (isValid) {
         validOrInvalid = 'valid';
      } else {
         validOrInvalid = 'invalid';
      }
   
      return validOrInvalid;
   }
}

 // distanceCheck(3, 0, 0, 4);
 // distanceCheck(2, 1, 1, 1);

/*

  distance1 = sqrt(powTwo(0 - x1) + powTwo(0 - y1)) 
  distance2 = sqrt(powTwo(x2 - 0) + powTwo(y2 - 0))                   
  distance3 = sqrt(powTwo(x2 - x1) + powTwo(y2 - y1)) 

Outpt 1: 
       x1 = 3, 
       y1 = 0, 
       x2 = 0, 
       y2 = 4

              .(y1 = 0, y2 = 4)
              . 
              . 
              . 
     .  . . . 0 . . .(x1 = 3, x2 = 0) 
              .
              .
              .
    
     distance1 = sqrt(powTwo(0 - x1) + powTwo(0 - y1)) 
     distance1 = sqrt(9 + 0) = 3 -> YES
     distance2 = sqrt(powTwo(x2 - 0) + powTwo(y2 - 0))  
     distance2 = sqrt(0 + 16) = 4 -> YES                
     distance3 = sqrt(powTwo(x2 - x1) + powTwo(y2 - y1)) 
     distance3 = sqrt(9 + 16) = 5 -> YES
  
Outpt 2:
       x1 = 2, 
       y1 = 1, 
       x2 = 1, 
       y2 = 1        

              .
              . 
              .  (y1 = 1, y2 = 1) 
              . . .(x1 = 2, x2 = 1) 
     .  . . . 0 . . 
              .
              .
              .

     distance1 = sqrt(powTwo(0 - x1) + powTwo(0 - y1)) 
     distance1 = sqrt(4 + 1) -> NO
     distance2 = sqrt(powTwo(x2 - 0) + powTwo(y2 - 0))  
     distance2 = sqrt(1 + 1) -> NO                 
     distance3 = sqrt(powTwo(x2 - x1) + powTwo(y2 - y1)) 
     distance3 = sqrt(1 + 0) = 1 -> YES 
*/
