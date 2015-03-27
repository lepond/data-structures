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

};

BinarySearchTree.prototype.depthFirstLog = function (callback) {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
