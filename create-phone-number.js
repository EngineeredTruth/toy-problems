//my solution
function createPhoneNumber(numbers){

	let n = numbers

  return `(${''+n[0]+n[1]+n[2]}) ${''+n[3]+n[4]+n[5]}-${''+n[6]+n[7]+n[8]+n[9]}`
}

//best practices
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}

//test
Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
