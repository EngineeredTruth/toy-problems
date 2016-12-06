//my solution
function getMean(arr, x, y) {
  if(x === 1 || x > arr.length || y === 1 || y > arr.length){
    return -1
  }

  let sumX = 0;
  let sumY = 0;

  for(let i = 0; i < x; i++){
    sumX += arr[i]
  }

  for(let i = 0; i < y; i++){
    sumY += arr[arr.length - i -1]
  }

  let meanX = sumX/x
  let meanY = sumY/y

  return (meanX+meanY)/2;

}

//best practices
const getMean=(arr, x, y)=>x<2 || y<2 || x>arr.length || y>arr.length ? -1 : (arr.slice(0,x).reduce((a,b)=>a+b)/x+arr.slice(-y).reduce((a,b)=>a+b)/y)/2;
