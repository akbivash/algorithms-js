// The entry point to a linked list is called the head.
//  The head is a reference to the first node in the linked list.
// The last node on the list points to null. If a list is empty, the head is a null reference.

export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Helper function to add two linked lists
  static addLists(list1, list2) {
    const result = new LinkedList();
    let carry = 0;
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 || current2 || carry) {
      const value1 = current1 ? current1.data : 0;
      const value2 = current2 ? current2.data : 0;
      const sum = value1 + value2 + carry;

      carry = Math.floor(sum / 10);
      result.append(sum % 10);

      if (current1) current1 = current1.next;
      if (current2) current2 = current2.next;
    }

    return result;
  }
}

// Create the first linked list
let list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);

// Create the second linked list
let list2 = new LinkedList();
list2.append(4);
list2.append(5);
list2.append(6);

// Add the two linked lists
const sumList = LinkedList.addLists(list1, list2);
console.log(sumList);

// Print the result
console.log("List 1:");
list1.print();

console.log("\nList 2:");
list2.print();

console.log("\nSum of Lists:");
// sumList.print();

export { LinkedList };
