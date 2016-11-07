//my solution
String.prototype.ipv4Address = function(){
let array = this.split('.')

for(let i = 0; i < array.length; i++){
  if(array[i] > 255){
    return false;
  }
}

let reg = new RegExp(/^\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}$/);
let lead0 = new RegExp(/(^|\.)0\d/)
  return reg.test(this) && !lead0.test(this);
}

//best practices
String.prototype.ipv4Address = function() {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
};
1
