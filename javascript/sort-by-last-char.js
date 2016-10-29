function last(x){
	let results = x.split(' ');

	return results.sort((a,b)=>{
		return a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1)
	})
}

last('man i need a taxi up to ubud')
