function evaporator(content, evap_per_day, threshold){

const thresholdAmount = content*(threshold/100);
let n = 0;

while(content > thresholdAmount){
	content = content-content*(evap_per_day/100);
	n++;
}

  return n;
}

Test.assertEquals(evaporator(10,10,10),22);
