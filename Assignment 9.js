//Q2//
function displayCurrentDateTime() {
    var currentDate = new Date();
    console.log("Current Date & Time: " + currentDate.toLocaleString());
  }
  
  displayCurrentDateTime();

//Q3//
  function greetUser(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    console.log("Hello, " + fullName + "! Welcome!");
  }
  
  var userFirstName = "Muhammad";
  var userLastName = "Hassan";
  greetUser(userFirstName, userLastName);
  
//Q7//
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }


//Q8//
function displayCounting(start, end) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  } else {
    console.log("Start number must be less than or equal to the end number.");
  }
}

displayCounting(1, 10);

//Q9//
function calculateHypotenuse() {
  var base = prompt('Enter value of base')
  var perpendicular = prompt('Enter value of perpendicular')
  var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)

  function calculateSquare(value){
    return value * value
  }
  return hypotenuse
}

//Q10//
function arguments() {
  for(var i = 0; i <= arguments.length; i++){
    console.log(arguments(i + 1) , arguments(i))
  }
  return argument
}

//Q29//
function calculateAge(birthYear) {

  var currentYear = new Date().getFullYear();


  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;


  console.log('You are either ' , age1 , ' or ' , age2 , ' years old.');
}


calculateAge(1990); 
calculateAge(1985); 
calculateAge(2000); 


