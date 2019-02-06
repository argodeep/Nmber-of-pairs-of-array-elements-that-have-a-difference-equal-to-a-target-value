let arrayOfIntegers = [1, 2, 3, 4]; //Defined the array
let targetValue = 1; //Defined the target Value
var totalPair = []; // array to store pair results

  for (i = 0; i < arrayOfIntegers.length; i++) {
      var seletedArrayValue = arrayOfIntegers[i]; // select the value of the array elements one by one
      var differenceValue = ( seletedArrayValue - targetValue );  // to get the difference value
      
      if ( arrayOfIntegers.indexOf(differenceValue) != -1 ) {  //checking if the differenceValue available in the array.
         var pair = 1;  // true condition if matches
      } else {
         var pair = 0; // false condition if not matches
      }
      totalPair[i]=pair; // adding the results(total pair) in a array
  }
      
      getSum = (total, num) => {  // Function for sumation of result from (total pair array)
        return total + num;
      }
           
      console.log("Number of pairs have a difference equal to a target value= ", totalPair.reduce(getSum))
