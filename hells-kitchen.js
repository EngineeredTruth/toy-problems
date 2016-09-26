function gordon(a){

var results = a.toUpperCase().replace(/\s/g,'!!!! ').replace(/a/ig, '@').replace(/[eiou]/ig,'*').replace(/$/,'!!!!');

return results;
}
