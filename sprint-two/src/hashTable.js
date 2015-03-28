var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, []);
  }
  this._storage.get(i).push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    for (var j = 0; j < this._storage.get(i).length; j++) {
      if (k === this._storage.get(i)[j][0]){
        return this._storage.get(i)[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    for (var j = 0; j < this._storage.get(i).length; j++) {
     if (k === this._storage.get(i)[j][0]) {
      this._storage.get(i).splice(j, 1);
     }
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(1)
 retrieve = O(n)
 remove = O 
 */
