var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.stackSize = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function () {
    return this.stackSize;
  },
  push: function (value) {
    this.stackSize++;
    this.storage[this.stackSize] = value;
  },
  pop: function () {
    if (this.stackSize > 0) {
      var temp = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--;
      return temp;
    }
  }
};
