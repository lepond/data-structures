describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];
  var people2 = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing'], ['Lindsay', 'Pond'], ['Cat', 'Dog'], ['Ed', 'Horse']];

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    var removed = hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(null);
    expect(removed).to.eql(['Steven', 'Tyler']);
  });

  it('should remove only one key when multiple are stored at the same index', function() {
    hashTable.insert('act', '1');
    hashTable.insert('cat', '2');
    hashTable.remove('cat');
    expect(hashTable.retrieve('act')).to.equal('1');
    expect(hashTable.retrieve('cat')).to.equal(null);
  });

  it('should handle hash function collisions', function(){
    var v1 = "val1";
    var v2 = "val2";
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  it('should double in size when needed', function() {
    _.each(people2, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    expect(hashTable.retrieve('Steven')).to.equal('Tyler');
    expect(hashTable.retrieve('Ed')).to.equal('Horse');
    expect(hashTable.retrieve('Cat')).to.equal('Dog');
  });

  it('should halve in size when needed', function() {
    _.each(people2, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    expect(hashTable.retrieve('Alan')).to.equal('Turing');
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    hashTable.remove('Lindsay');
    hashTable.remove('Cat');
    hashTable.remove('Ed');
    expect(hashTable._limit).to.equal(8);
    expect(hashTable.retrieve('Alan')).to.equal('Turing');
  });
});
