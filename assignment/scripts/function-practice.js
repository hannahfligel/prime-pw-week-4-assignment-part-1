console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, '+ name;
}
// Remember to call the function to test
console.log( helloName('Hannah!'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return answer;
}
console.log ( addNumbers (2, 3));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  //create a variable called answer and set it equal to firstNumber * secondNumber * thirdNumber 
  let answer = firstNumber * secondNumber * thirdNumber;
  //return answer 
  return answer;
}
//console log the numbers you want to multiply 
console.log ( multiplyThree (2, 3, 1) );

//another answer that includes the console log inside the function, this way you don't have to console log every solution seperatly: 
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  let answer = firstNumber * secondNumber * thirdNumber;
  console.log( answer )
  return answer;
}
( multiplyThree (2, 3, 1) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
//create a function called getLast that takes in the value called array
function getLast( array ) {
  //if the array is empty, then return undefined
  if(array.length === 0){
    return console.log(undefined);
  }
  //else, (is the array is not empty), console log the last item of the array 
  else{
    console.log(array[array.length-1]);  //the length of the array is always going to be one more of the last index 
  }
}
  getLast(["Moon","Floyd", "Hannah", "Stav"]);
  // getLast(["Moon","Floyd", "Hannah", "Stav", "Paran"]);
  // getLast([1, 2, 3, 4]);
  // getLast([]);
  // getLast("moon");//a string is technically an array, which is why when you run this, you'll console will access "n", as it's the last item in the array 
  // getLast(1234);//this will console undefined because numbers are not inherently an array. You cannot loop through a number. You can only loop through numbers if they are in an array. 

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
//create a function and assign it the value of find with the arguments of value and array 
function find( value, array ){
    //create a for loop that loops through the array to check if the value exists in the array. 
    for(let i=0; i<array.length; i++){
      //check if the value is equal to the array[i]
      if(value === array[i]){
        //return true if the value exists in the array 
        return console.log (true);
      }//end if 
      //return false if the value does not exists in the array 
      return console.log (false);
  }//end for
}//end find
//fire off the find function and give it the parameters of the value you're searching for in the array that you'll be searching in. 
find("fshiufsh",["Hannah", "Paran", "Stav", "Moon"]);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
