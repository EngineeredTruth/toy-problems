//my solution
function length(head) {

let count = 0;

if(head === null && count === 0){
  return 0;
}

while(head.next !== null){
  head = head.next
  count++;
}

return ++count;

}

//best practices
function length(head) {
  if (head == null) return 0;
  return 1 + length(head.next);
}
