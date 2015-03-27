

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node){
  if (this.nodes[node] !== undefined) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var key in this.nodes[node]) {
    this.removeEdge(key, node);
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] !== undefined && this.nodes[fromNode][toNode] !== undefined) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  contains = O(1);
  removeNode = O(1);
  hasEdge = O(1);
  addEdge = O(1);
  forEachNode = O(n to n^2);
  addNode = 0(1);
 */



