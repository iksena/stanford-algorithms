// const MyLinkedList = function () {
//   this.val = null;
//   this.next = null;
// };

// /**
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function (index) {
//   let i = 0;
//   let node = this;
//   while (i < index) {
//     node = node.next;
//     i++;
//   }
//   return node;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function (val) {
//   this.val = val;
//   this.next = this;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function (val) {
//   let node = this;
//   while (node.next !== null) {
//     node = node.next;
//   }
//   node.val = val;
//   node.next = null;
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {
//   const node = this.get(index);
//   node.val = val;
//   node.next = node;
// };

// /**
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {
//   const node = this.get(index);
//   node.val = node.next.val;
//   node.next = node.next.next;
// };

// const deleteNodeProblem = () => {
//   const deleteNode = (node) => {
//     node.val = node.next.val;
//     node.next = node.next.next;
//   };
// };

const MyLinkedList = function (value, next) {
  this.value = value || null;
  this.next = next || null;
};

/**
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  let i = 0;
  let node = this;
  while (node !== null) {
    if (i === index) {
      return node.value;
    }
    node = node.next;
    i++;
  }

  return -1;
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  const currentNode = { ...this };
  this.value = val;
  this.next = (!currentNode || currentNode.value === null) ? null : currentNode;
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  let node = this;
  while (node !== null) {
    if (node.value === null) {
      node.value = val;
      return node;
    }
    if (node.next === null) {
      node.next = {
        value: val,
        next: null,
      };
      return node.next;
    }
    node = node.next;
  }
  return node;
};

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let i = 0;
  let node = this;
  while (node !== null) {
    if (i === index && index === 0) {
      return this.addAtHead(val);
    }
    if (i + 1 === index) {
      const newNode = {
        value: val,
        next: node.next,
      };
      node.next = newNode;
      return newNode;
    }
    node = node.next;
    i++;
  }

  return null;
};

/**
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let i = 0;
  let node = this;
  while (node !== null) {
    if (i === index && index === 0) {
      const nextNode = node.next;
      if (nextNode === null) {
        this.value = null;
        this.next = null;
        return this;
      }
      this.value = nextNode.value;
      this.next = nextNode.next;
      return this;
    }
    if (i + 1 === index) {
      const nextNode = node.next;
      if (nextNode === null) {
        node.next = null;
        return node;
      }
      node.next = node.next.next;
      return node.next;
    }
    node = node.next;
    i++;
  }

  return -1;
};

MyLinkedList.prototype.getAll = function () {
  let i = 0;
  let node = this;
  const list = [];
  while (node !== null) {
    list.push({ index: i, ...node });
    node = node.next;
    i++;
  }
  return list;
};

const head = new MyLinkedList();
head.addAtHead(0);
head.addAtTail(1);
head.addAtTail(2);
console.log(head.getAll());

// head.addAtHead(7);
// head.addAtTail(7);
// head.addAtHead(9);
// head.addAtTail(8);
// head.addAtHead(6);
// head.addAtHead(0);
// console.log(head.getAll());
// head.addAtHead(0);
// head.addAtTail(4);
// console.log(head.getAll());
