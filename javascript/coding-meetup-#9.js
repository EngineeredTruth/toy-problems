//my solution
function isAgeDiverse(list) {
 let results = []

 let lower = 10;
 let upper = 20;

 function age(person) {
 if(lower === 100){
   return person.age >= 100;
 }
    return person.age >= lower && person.age < upper;
}

for(let i = 0; i < 10; i++){
  results.push(list.findIndex(age))
  lower += 10;
  upper += 10;
}

 return results.indexOf(-1) === -1;
}

//best practices
function isAgeDiverse(list) {
  return list.some(h => h.age >= 100)
  ? [10,20,30,40,50,60,70,80,90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
  : false;
}
