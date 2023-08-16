class Calculator{
    constructor(){

    }

    add(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    subtract(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiply(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    divide(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    power(num1,exp){
        return num1**exp;
    }
    squareRoot(num){
        return Math.sqrt(num);
    }
    cubeRoot(num){
        return Math.cbrt(num);
    }

    operationCalculator(operation, number1, number2){
        let result;
        switch(operation){
            case 1:
                result = calculator.add(number1,number2);
                alert(`Your result is ${result}`);
                break;
            case 2:
                result = calculator.subtract(number1,number2);
                alert(`Your result is ${result}`);
                break;
            case 3:
                result = calculator.multiply(number1,number2);
                alert(`Your result is ${result}`);
                break;
            case 4:
                result = calculator.divide(number1,number2);
                alert(`Your result is ${result}`);
                break;
            case 5:
                result = calculator.power(number1,number2);
                alert(`Your result is ${result}`);
                break;
            case 6:
                result = calculator.squareRoot(number1);
                alert(`Your result is ${result}`);
                break;
            case 7:
                result = calculator.cubeRoot(number1);
                alert(`Your result is ${result}`);
                break;
            default:
                alert("No option was chosen");
        }
    }
}

const calculator = new Calculator();

alert("What operation do you want to perform?");
let operation = parseInt(prompt("1: Add, 2: Subtract, 3: Multiply, 4: Divide, 5: Power, 6: Square Root, 7: Cube Root"));

if(operation == 6 || operation == 7){
    let number1 = prompt("Number for the operation");
    let number2 = 0;
    calculator.operationCalculator(operation, number1, number2);
}else{
    let number1 = prompt("First number for the operation.");
    let number2 = prompt("Second number for the operation.");
    calculator.operationCalculator(operation, number1, number2);
}


