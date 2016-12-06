//my solution
String.prototype.isAudio= function(){
console.log(this);

  if(/\s/.test(this)){
    return false;
  }

  if(/[^a-z].*\./gi.test(this)){
    return false;
  }

  let patt = /.mp3|.flac|.alac|.aac/

  return patt.test(this);
};

String.prototype.isImage= function(){
  console.log(this);
  if(/\s/.test(this)){
    return false;
  }

  if(/[^a-z].*\./gi.test(this)){
    return false;
  }

  let patt = /.jpg|.jpeg|.png|.bmp|.gif/
  return patt.test(this);
};

//best practices
String.prototype.isAudio = function() {
  return /^[a-zA-Z]+\.(mp3|flac|al?ac)$/.test(this)
}

String.prototype.isImage = function() {
  return /^[a-zA-Z]+\.(jpe?g|png|bmp|gif)$/.test(this)
}
