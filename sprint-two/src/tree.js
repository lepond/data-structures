var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
  newChild.parent = this;
};
treeMethods.contains = function(target){
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target || this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  // find this child in its parent's children array and splice it out
  this.parent.children.splice(_.indexOf(this.parent.children, this), 1);
  // set parent to null
  this.parent = null;


};

treeMethods.traverse = function(callback){
  callback(this.value);
  for (var i = 0; i < this.children.length; i++) {
    callback(this.children[i].value);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1);
 contains = O(log n);
 */
