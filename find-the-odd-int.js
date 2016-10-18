//my solution
function findOdd(A) {

let string = ' ' + A.join('  ')+' ';
console.log(string)


for(let i = 0; i < A.length;i++){
	let matchWith = new RegExp(' '+A[i]+' ','g');
	console.log(matchWith)
	let test = string.match(matchWith)
	if(test.length % 2 !== 0){
		console.log(test)
		return A[i]
	}
}

  return 'No Match';
}

//best practice
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//test
//doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1)
