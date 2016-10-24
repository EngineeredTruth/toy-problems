//my solution
function spinWords(string){

	string = string.split(' ');

	for(let i = 0; i < string.length; i++){
		if(string[i].length >= 5){
			string[i] = string[i].split('').reverse().join('');
		}
	}

  return string.join(' ');
}

//best practices
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//test
Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
