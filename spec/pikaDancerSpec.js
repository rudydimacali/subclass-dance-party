describe('pikaDancer', function() {

  var pikaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pikaDancer = new PikaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pikaDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have class PikaDancer', function() {
    expect(pikaDancer.$node.attr('class')).to.equal('PikaDancer');
  });
  
  it('should inherit setPosition function from Dancer superclass', function() {
    expect(pikaDancer.setPosition).to.equal(Dancer.prototype.setPosition);
  });
  
});
