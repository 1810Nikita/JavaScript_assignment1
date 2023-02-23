function calculate() {
    //Declaring num1
    const num1 = document.getElementById('num1').value;
    //declaring num2
    const num2 = document.getElementById('num2').value;
    //declaring operator
    const operator = document.getElementById('operator').value;
    //declaring result
    let result;
    //if the operator is not selected it will show alert
    try{
        if (operator === '') {
            throw new Error('Please select an operator');
        }
        //if the number is not present it will show alert(Enter valid numbers)
        if (num1==='' || num2==='') {
            throw new Error('Please enter valid numbers');
        }
        //switch case for addition , Subtraction, multiplication , division
        switch(operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                //error handling for division by Zero(show alert)
                if (num2 === '0') {
                    throw new Error('Cannot divide by zero');
                    
                }
                result = divide(num1, num2);
                break;
            default:
                throw new Error('Invalid operator');
                
        }
        //showing Answer in result 
        document.getElementById('result').innerText = ` ${result}`; 
    }
    //catch error message
    catch(err) {
        alert(err.message);
    }
}
//function for addition  
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
//function for subtraction  
function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}
//function for Multiplication 
function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}
//function for Division  
function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}
  