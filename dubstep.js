//my solution
function songDecoder(song){
	let yas = song.replace(/WUB/gi, '@');
	yas = yas.replace(/@+/gi,'@');
	console.log(yas)
	if(yas[0] === '@'){
		yas = yas.slice(1);
		console.log('leading: ',yas);
	}
	if(yas[yas.length-1] === '@'){
		yas = yas.slice(0, yas.length-1);
		console.log('ending: ',yas);
	}
  	return yas.replace(/@/g, ' ')
}

//best solution
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
