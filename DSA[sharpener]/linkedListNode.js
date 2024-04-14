class Node {
  constructor(a) {
    this.value = a;
    this.next = undefined;
  }
}

insertion_start = function (head, value) {
  new_node = new Node(value);
  new_node.next = head;
  return new_node;
};

display = function(head) {
temp = head;
while(temp != null) {
    console.log(temp.value);
    temp = temp.next;
}
}


insertion_end = function (head, value) {
    new_node = new Node(value);
    temp = head;
    while(temp.next != null) {
        temp = temp.next;
    }
    temp.next = new_node;
}

head = new Node(5);

head = insertion_start(head, 10);
// console.log(head);
insertion_end(head, 20);
display(head);
