var Stack = function(){
  var stackSize = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    stackSize++;
    storage[stackSize] = value;
  };

  someInstance.pop = function(){
    if (stackSize > 0) {
      var temp = storage[stackSize];
      delete storage[stackSize];
      stackSize--;
      return temp;
    } 
  };

  someInstance.size = function(){
    return stackSize;
  };

  return someInstance;
};

