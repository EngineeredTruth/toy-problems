//my solution
function dontGiveMeFive(start, end) {

  let results = []

  for( let i = start; i <= end; i++){
    let toString = i + '';
    var patt = new RegExp("5");
    if(!patt.test(toString)){
      results.push(i);
    }
  }

  return results.length;
}
