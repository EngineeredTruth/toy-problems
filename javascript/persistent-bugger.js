//my solution
function persistence(num){

	if(num < 10){
		return 0;
	}

num = numFormater(num);

	let multiple = num.reduce((a,b)=>{
		return a*b;
	})

	let counter = 1;

	while(multiple >= 10){
		num = multiple;
		num = numFormater(num);
		multiple = num.reduce((a,b)=>{
		return a*b;
	})
	// console.log(multiple);
		counter++;
	}

	return counter;
}

function numFormater(num){
	num = num+'';
	num = num.split('');

	for(let i = 0; i < num.length; i++){
		num[i] = parseInt(num[i])
	}
	return num;
}

//best practices
function persistence(num) {
   var times = 0;

   num = num.toString();

   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }

   return times;
}

//test
describe('Initial Tests', function () {
  Test.assertEquals(persistence(39),3);
  Test.assertEquals(persistence(4),0);
  Test.assertEquals(persistence(25),2);
  Test.assertEquals(persistence(999),4);
});
