function movie(card, ticket, perc) {

 let sysB = card;
 let sysA = 0;
 let n = 0;

 while(Math.ceil(sysB) >= sysA){

 	sysA += ticket
 	sysB += ticket * Math.pow(perc,n+1)

 	n++;
 }

 return n

}

movie(100, 10, 0.95);
