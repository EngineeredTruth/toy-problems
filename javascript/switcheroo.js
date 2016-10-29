function switcheroo(x){

var results = x;

results = results.replace(/b/gi,'$');
results = results.replace(/a/gi,'&');

results = results.replace(/\$/gi,'a');
results = results.replace(/&/gi,'b');

return results;

}
