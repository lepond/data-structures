var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create vare using Object.create
  // set recurring properties
  var obj = Object.create(stackMethods);
  obj.stackSize = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = { 
  size: function(){ return this.stackSize;} ,  
  push: function (value) { 
    this.stackSize++; 
    this.storage[this.stackSize] = value;},
  pop: function () {
    if (this.stackSize > 0) {
      var temp = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--; 
      return temp;
    }
 }
};


