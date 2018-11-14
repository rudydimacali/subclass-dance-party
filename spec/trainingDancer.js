describe('trainingDancer', function() {

  var trainingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    trainingDancer = new TrainingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(trainingDancer.$node).to.be.an.instanceof(jQuery);
  });
