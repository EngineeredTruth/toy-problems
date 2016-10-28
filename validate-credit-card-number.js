//my solution
function validate(n){

	n = n+'';
	n = (""+n).split("").map(function(t){return parseInt(t)});

  if(n.length % 2 === 0){
    for(let i = 0; i < n.length; i=i+2){
    	n[i] = n[i]*2;
    }
  } else {
  	for(let i = 1; i < n.length; i=i+2){
    	n[i] = n[i]*2;
  	}
  }

  for(let i = 0; i < n.length; i++){
  	if(n[i]>9){
  		n[i] = n[i] - 9;
  	}
  }

  let sum = n.reduce((a,b)=>{
  	return a+b;
  })

  return sum % 10 === 0;

}

//best practices
function validate(n){
  var sum = 0;

  while (n > 0) {
    var a = n % 10;
    n = Math.floor(n / 10);

    var b = (n % 10) * 2;
    n = Math.floor(n / 10);

    if (b > 9) {
      b -= 9;
    }

    sum += a + b;
  }

  return sum % 10 == 0;
}
