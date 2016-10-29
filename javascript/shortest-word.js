function findShort(s){

let positions = [0];

for (let i = 0; i < s.length; i++){
  if(s[i] === ' '){
    positions.push(i);
  }
}

let wordsLength = [];

for(let i = 0; i < positions.length; i++){
  wordsLength.push(positions[i+1] - positions[i] - 1)
}

wordsLength[0] += 1;

wordsLength[wordsLength.length-1] = s.length - positions[positions.length-1] - 1

if(positions.length === 1){
  wordsLength[0] = (s.length);
}

return wordsLength.sort((a,b)=>{return a-b;})[0];
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
