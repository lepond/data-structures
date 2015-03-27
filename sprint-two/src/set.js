var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

setPrototype.intersects = function (otherSet) {
  var intersectVals = Set();
  for (var key in this._storage) {
    if (otherSet.contains(key)) {
      intersectVals.add(key);
    }
  }
  return intersectVals;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
