/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head === null) this.head = newNode;
    if(this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head !== null){
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let res = this.tail.val;
    let currentNode = this.head;
    let previousNode = null;
    while(currentNode.next !== null){
      previousNode = currentNode;
      currentNode = currentNode.next;
    
    }
    if(previousNode !== null) { // if there was at least one remaining element in list
      previousNode.next = null;
    } else {  // the list is now empty
      this.head = null; 
    }
    this.tail = previousNode;
    this.length--;
    return res;
  }

  /** shift(): return & remove first item. */

  shift() {
    let res = this.head.val;
    this.head = this.head.next;
    this.length--;
    if(this.length == 0) this.tail = null;
    return res;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for(let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    for(let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let previousNode = null;
    for(let i = 0; i < idx; i++){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    let newNode = new Node(val);
    if(previousNode == null) {
      this.head = newNode;
    } else {
      previousNode.next = newNode;
    }
    if(currentNode == null) this.tail = newNode 
    newNode.next = currentNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let res = null;
    let currentNode = this.head;
    let previousNode = null;
    for(let i = 0; i < idx; i++){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    res = currentNode.val;
    if(previousNode == null) { // set new head if start
      this.head = currentNode.next;
    } else { // skip removed node in sequence
      previousNode.next = currentNode.next;
    }
    if(currentNode.next == null) { // if end of list
      this.tail = previousNode;  //set new tail
    }
    this.length--;
    return res;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let currentNode = this.head;
    if (this.length == 0) return 0;
    while(currentNode.next !== null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    sum += currentNode.val;
    return sum / this.length;
  }
}

module.exports = LinkedList;
