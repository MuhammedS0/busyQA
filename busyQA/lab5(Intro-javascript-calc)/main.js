// Intro to javascript - we are making a calculator 

// This funtion returns the sum of the parameters
function add(a, b) {
    return a + b
  }
  // This function returns the subtraction of the parameters
  function subtract(a, b) {
    return a - b
  }
  // this function returns the multiplication of the parameters
  function multiply(a, b) {
    return a * b
  }
  // this funtion returns the divition of the parameters
  function divide(a, b) {
    return a / b
  }
  
  // This function handles the calculations of the functions above
  function calculate(operation, num1, num2) {
    switch (operation) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      default:
        throw new Error("Invalid operator")
    }
  }
  
  try {
    console.log('Addition: ' + calculate("+", 5, 3));
    console.log('Subtraction: ' + calculate("-", 10, 4));
    console.log('Multiplication: '+ calculate("*", 7, 2));
    console.log('Division: '+ calculate("/", 12, 3));
    console.log('Division by zero: '+ calculate("/", 5, 0));
    
  } catch(error) {
    console.log('Error: '+ error.message);
  }

  // lets run a funtion that plays this calculator in a prompt
  
  function playCalc() {
    // first three lines are set up to grab values of the first and second number as well as the operations. I changed the value
    // of the numbers form String to Float so i can do operations on them
    let firstNumber = parseFloat(prompt("Please type a number to complete the operation: "))
    let operator = prompt("Please type an operator (+,-,*, or /):  ")
    let secondNumber = parseFloat(prompt("Please type a number to complete the operation: "))
    alert("Your anwer is: " + calculate(operator, firstNumber, secondNumber))
    

  }
  // calling the playCalc function so the game plays when you load the page
  playCalc()