describe('shyDancer', function() {

  var shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shyDancer = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shyDancer.$node).to.be.an.instanceof(jQuery);
  });
