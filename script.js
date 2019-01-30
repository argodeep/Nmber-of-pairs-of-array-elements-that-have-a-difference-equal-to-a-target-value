let arrayOfIntegers = [1, 2, 3, 4]; //Defined the array
let targetValue = 1; //Defined the target Value
var totalPair = []; // total pair that matches the condition

  for (i = 0; i < arrayOfIntegers.length; i++) {
      var seletedArrayValue = arrayOfIntegers[i]; // select the value of the array elements one by one
      var differenceEqual = ( seletedArrayValue - targetValue );  // to get the difference value
      
      if ( arrayOfIntegers.indexOf(differenceEqual) != -1 ) {  //checking if the differenceEqual mathces to the target value
         var pair = 1;  // true condition if matches
      } else {
         var pair = 0; // flase condition if not matches
      }
      totalPair[i]=pair; // adding the results(total pair) in a array
  }
      
      getSum = (total, num) => {  // Function for sumation of result(total pair) from array values
        return total + num;
      }
           
      console.log("Number of pairs have a difference equal to a target value= ", totalPair.reduce(getSum))
