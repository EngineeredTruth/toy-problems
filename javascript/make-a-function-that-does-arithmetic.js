//my solution
function arithmetic(a, b, operator){
let result = 0;

  switch (operator) {
    case 'add':
        result = a + b;
        break;
    case 'subtract':
        result = a - b;
        break;
    case 'multiply':
        result = a * b;
        break;
    case 'divide':
        result = a / b;
        break;
}
return result
}

//best practices
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}
