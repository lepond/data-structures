var HashTable = function(){
  this._limit = 8;
  this._limitMinimum = 8;
  this._storage = LimitedArray(this._limit);
  this._filledSlots = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, []);
    this._filledSlots++;
  }
  this._storage.get(i).push([k,v]);
  if (this._filledSlots >= this._limit*3/4) {
    this.resize(2);
  }
};

HashTable.prototype.resize = function (multiplier) {
  //remove every pair from storage
  var temp = [];
  var hash = this;
  //store in temp variable
  this._storage.each( function (pairs) {
    if (pairs !== undefined) {
      for (var i = 0; i < pairs.length; i++) {
        temp.push(pairs[i]);
      }
    }
  });
  // reset limit
  this._limit = this._limit*multiplier;
  // create new storage
  this._storage = LimitedArray(this._limit);
  this._filledSlots = 0;
  // insert everything from temp
  for (var i = 0; i < temp.length; i++) {
    this.insert(temp[i][0], temp[i][1]);
  }
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
      var removed = this._storage.get(i).splice(j, 1)[0];
      if (this._storage.get(i).length === 0) {
        this._storage.set(i, undefined);
        this._filledSlots--;
      }
      if (this._limit > this._limitMinimum && this._filledSlots <= this._limit*1/4) {
        this.resize(1/2);
      }
      return removed; 
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
