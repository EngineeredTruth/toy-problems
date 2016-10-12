function getCount(str) {

  var starred = str.replace(/[aeiou]/gi, '*');
  var vowelsCount = 0;

  for(let i = 0; i < starred.length; i++){
    if(starred[i] === '*'){
      vowelsCount++;
    }
  }

  return vowelsCount;
}
