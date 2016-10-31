//my solution
function inArray(array1,array2){

  let results = [];

  for(let i = 0; i < array2.length; i++){
  	// console.log(array2[i])
  	for(let j = 0; j < array1.length; j++){
  		if(array2[i].match(array1[j])){
  			results.push(array2[i].match(array1[j])[0])
  		}
  	}
  }

  return results.sort().filter((a,i,arr)=>{
  	return arr[i-1] !== a && a !=='';
  });
}

//best practices
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

//test
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
Test.assertSimilar(inArray(a1, a2), [])
