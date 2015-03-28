var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (this.value < value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (this.left && value < this.value) {
    return this.left.contains(value);
  }
  if (this.right && value > this.value) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  // callback on value
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
  insert = O(log(n))
  contains = O(log(n))
  depFirstLog = O(log(n))
 */
