var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.first = 0;
  obj.last = 0;
  return obj;
};

var queueMethods = {
  size: function () { return this.last - this.first;},
  enqueue: function (value) { 
    this.last++; 
    this.storage[this.last] = value;
  },
  dequeue: function () { 
    if (this.last > this.first) {
      this.first++;
      var temp = this.storage[this.first];
      delete this.storage[this.first];
      return temp;
    }
  }
};


