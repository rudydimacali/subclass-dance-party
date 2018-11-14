describe('trainerDancer', function() {

  var trainerDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    trainerDancer = new TrainerDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(trainerDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have class TrainerDancer', function() {
    expect(trainerDancer.$node.attr('class')).to.equal('TrainerDancer');
  });
  
  it('should overwrite setPosition function from Dancer superclass', function() {
    expect(trainerDancer.setPosition).to.not.equal(Dancer.prototype.setPosition);
  });
});