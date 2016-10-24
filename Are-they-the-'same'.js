//my solution
function comp(array1, array2){

	if(array1.length === 0 && array2.length === 0){
		return true;
	}

	if(array1 === null || array2 === null || array1.length === 0 || array2.length === 0){
		return false;
	}

  array1.sort((a,b)=>{
  	return a-b;
  })

  array1 = array1.map((x)=>{
  	return Math.pow(x,2)
  })

  array2.sort((a,b)=>{
  	return a-b;
  })

  let counter = 0;

  for(let i = 0; i < array1.length; i++){
  	if(array1[i] === array2[i]){
  		counter++;
  	}
  }

  return counter === array1.length;

}

//best practice
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

//test
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
Test.assertEquals(comp(a1, a2), true);
