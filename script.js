const add = function(a, b) {
    return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const devide = function (a, b) {
  return a / b;

};

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator){
        case "+":
            return add (a,b);
        case "-":
            return subtract (a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return devide(a,b);
    }
}

console.log(operate('/', 2, 3));