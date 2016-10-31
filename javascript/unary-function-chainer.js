//best solution
function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}
