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
