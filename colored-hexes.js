function hexColor(codes){

var arr = codes.split(' ');

var red = arr[0];
var green = arr[1];
var blue = arr[2];

if( red > blue && red > green){
  return 'red';
}

if( green > red && green > blue){
  return 'green';
}

if( blue > green && blue > red){mango
  return 'blue';
}

if ( blue === red && blue > green){
  return 'magenta'
}
if ( green === red && red > blue){
  return 'yellow'
}
if ( blue === green && blue > red){
  return 'cyan'
}

if (blue === '0' && red === '0' && green === '0'){
  return 'black'
}

if (blue === '000' && red === '000' && green === '000'){
  return 'black'
}

if ( blue === red && red === green){
  return 'white'
}

if (codes.length === 0) {
  return 'black'
}
return 'fail';
}
