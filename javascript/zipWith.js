//my solution
function zipWith(fn,a0,a1) {

	let length = a0.length
if( a0.length !== a1.length){
	length = Math.min(a0.length, a1.length)
}

let results = [];

for(let i = 0; i < length; i++){
	console.log(fn(a0[i],a1[i]))
	results.push(fn(a0[i],a1[i]));
}

  return results;
}

//best practices
function zipWith(fn,a0,a1) {
  return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
}
