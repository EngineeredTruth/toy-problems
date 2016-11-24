//my solution
function indexOf(head, value) {

console.log('head: ',head)

let index = 0;

  if (head === null) return -1

  while(head.data !== value && head.next !==null){
    index++;
    head = head.next;
  }

  if(head.next === null && value !== head.data) return -1

  return index
}

//best practices
function indexOf(node, value) {
  var i = 0;
  while (node !== null) {
    if (node.data === value) return i;
    node = node.next;
    ++i;
  }
  return -1;
}
