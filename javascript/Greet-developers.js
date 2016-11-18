//my solution
function greetDevelopers(list) {
console.log(list);
  for(let i = 0; i < list.length; i++){
    list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
  }
  console.log(list);
  return list
}

//best practices
function greetDevelopers(list) {
  // thank you for checking out my kata :)
  return list.map( function( a ) {
                   a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
                   return a;
                  });
}
