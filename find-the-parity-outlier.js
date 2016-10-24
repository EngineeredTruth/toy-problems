//my solution
function findOutlier(integers){

	let odds = 0;
	let evens = 0;

  for(let i = 0; i < integers.length; i++){
  	if(integers[i] % 2 === 0){
  		evens++;
  	}
  	else {
  		odds++
  	}
  }

  if(odds > evens){
  	for(let i = 0; i < integers.length; i++){
  		if(integers[i] % 2 ===0){
  			return integers[i]
  		}
  	}
  }

    if(evens > odds){
  	for(let i = 0; i < integers.length; i++){
  		if(integers[i] % 2 !==0){
  			return integers[i]
  		}
  	}
  }

  console.log('odds: ', odds)
  console.log('evens: ', evens)

  return 'test';

}

findOutlier([2,6,8,10,3])


//best solution
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

Test.assertEquals(findOutlier([0, 1, 2]), 1)
Test.assertEquals(findOutlier([1, 2, 3]), 2)
Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
Test.assertEquals(findOutlier([1,1,0,1,1]), 0)demo
