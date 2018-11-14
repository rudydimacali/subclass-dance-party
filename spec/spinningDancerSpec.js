describe('spinningDancer', function() {

  var spinningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new SpinningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have class SpinningDancer', function() {
    expect(spinningDancer.$node.attr('class')).to.equal('SpinningDancer');
  });
  
  it('should inherit setPosition function from Dancer superclass', function() {
    expect(spinningDancer.setPosition).to.equal(Dancer.prototype.setPosition);
  });

});