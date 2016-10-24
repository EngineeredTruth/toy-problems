//my solution
function findEvenIndex(arr){

	for(let i = 1; i < arr.length-1; i++){
		let left = arr.slice(0,i)
		let right = arr.slice(i+1,arr.length)

		let leftSum = left.reduce(sum);
		let rightSum = right.reduce(sum);
		if(leftSum === rightSum){
			return i
		}
	}

	return -1

}

function sum(total,current){
	return total+current;
}

//best practices
function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

//tests
Test.describe("FindEvenIndex", function() {
  Test.it("Tests", function() {
    Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});
