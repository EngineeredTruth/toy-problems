//my solution
function titleCase(title, minorWords) {

  if(title === ''){
    return '';
  }

 title = title.toLowerCase().split('');

 for(let i = 1; i < title.length; i++){
   if(title[i-1]=== ' '){
     title[i] = title[i].toUpperCase();
   }
 }

   title = title.join('');

 if(minorWords !== undefined){
  let minorArr = minorWords.toLowerCase().split(' ');

  for(let i = 0; i < minorArr.length; i++){
    let match = new RegExp(minorArr[i],'gi');
   title = title.replace(match, minorArr[i]);
  console.log(title);
  }
 }

  title = title.split('');

  title[0] = title[0].toUpperCase();

  return title.join('');
}

//best solution
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

//test
Test.assertEquals(titleCase(''), '')
Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
