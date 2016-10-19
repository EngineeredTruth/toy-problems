//my solution
function order(words){

if(words === null || words === ''){
  return ''
}

	let array = words.split(' ')
	let positionArray = []
	for( let i = 0; i < array.length; i++){
		positionArray.push(array[i].match(/\d/));
	}

	positionArray.sort((a,b)=>{
		return a[0] > b[0];
	})

	let final = [];

	for( let i = 0; i < positionArray.length; i++){
		final.push(positionArray[i].input)
	}

	return final.join(' ');
}

//best practices
function order(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}

Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
Test.assertEquals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
Test.assertEquals(order(""), "")
