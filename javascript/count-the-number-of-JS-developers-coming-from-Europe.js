//my solution
function countDevelopers(list) {
  let count = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i].continent === 'Europe'){
      count++;
    }
  }

  return count;
}

//best practices
function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}
