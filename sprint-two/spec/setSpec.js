describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should accept number values in sets', function(){
    set.add(9);
    set.add(123);
    expect(set.contains(9)).to.equal(true);
    expect(set.contains(123)).to.equal(true);
  });

  it('should remove number values in sets', function(){
    set.add(9);
    set.remove(9);
    expect(set.contains(9)).to.equal(false);
  });

  it('should return the intersection of two sets as a new set', function(){
    var set2 = Set();
    set.add(9);
    set.add("dogs");
    set.add("cats");
    set2.add(9);
    set2.add("dogs");
    set2.add("giraffes");
    var result = JSON.stringify({"dogs":true, "9":true});
    expect(JSON.stringify(set.intersects(set2)._storage)).to.equal(result);
  });

});
