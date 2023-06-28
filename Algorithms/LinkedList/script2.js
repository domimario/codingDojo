class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    let currentNode = this.head;
    let values = [];

    while (currentNode) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return values.join(", ");
  }
}

const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display());

SLL1.addFront(11.41);
console.log(SLL1.display());
