//my solutionfunction digital_root(n) {
	let x = findRoot(n);
	console.log('x:', x);

 while(x >= 10){
 	console.log('inside while loop')
 	root = findRoot(x);
 	x = root;
 }
 console.log('root: ', x)


  return x;
}

function findRoot(n){
	console.log('findroot: ', n)
  let root = n+''
  root = root.split('')
  root = root.map((a) =>{
  	return parseInt(a);
  });

 root = root.reduce((total, currentval)=>{
 	return total+currentval;
 })
 console.log('ROOT:', typeof root)
 return root
}

//best practices
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
