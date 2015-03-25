var Queue = function(){
  var someInstance = {};
  var front = 0;
  var end = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    end++;
    storage[end] = value;
  };

  someInstance.dequeue = function(){
    if (end > front) {
      front++;
      var temp = storage[front];
      delete storage[front];
      return temp;
    }
  };

  someInstance.size = function(){
    return end - front;
  };

  return someInstance;
};
