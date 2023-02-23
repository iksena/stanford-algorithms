const MyLinkedList = function () {
  this.val = null;
  this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let i = 0;
  let node = this;
  while (i < index) {
    node = node.next;
    i++;
  }
  return node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.val = val;
  this.next = this;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = this;
  while (node.next !== null) {
    node = node.next;
  }
  node.val = val;
  node.next = null;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const node = this.get(index);
  node.val = val;
  node.next = node;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  const node = this.get(index);
  node.val = node.next.val;
  node.next = node.next.next;
};

const deleteNodeProblem = () => {
  const deleteNode = (node) => {
    node.val = node.next.val;
    node.next = node.next.next;
  };
};
