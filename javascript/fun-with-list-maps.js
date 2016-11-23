//my solution
Node.prototype.push = function(val){
    var node = {
       data: val,
       next: null
    }
    if(!this.next){
      this.next = node;
    }
    else{
      current = this.next;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }


function map(head, f) {

console.log('head: ', head);

let array = head

if( array === null){
  return array;
}

let results = [];

while(array.next){
  results.push(f(array.data));
  array = array.next;
}

results.push(f(array.data));

let final = new Node(results[0]);

for(let i = 1; i < results.length; i++){
  final.push(results[i]);
}

console.log('final: ', final);

return final;
}


//best practices
function map(head, f) {
  return !head ? null : new Node(f(head.data), map(head.next, f));
}
