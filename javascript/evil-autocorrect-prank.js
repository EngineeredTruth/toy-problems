//my solution
function autocorrect(input){

  input = input.replace(/(\s|^)you*(\s|$|[^a-z])/gi, '$1your sister$2')
  input = input.replace(/(\s|^)u(\s|$)/gi, '$1your sister$2')

  return input;
}

//best practices
function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, "your sister");
}
