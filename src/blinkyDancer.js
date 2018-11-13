var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // Create BlinkyDancer as subclass of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
};

// Declare Dancer.prototype as the superclass
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// BlinkyDancer.step function passing 'this' into Dancer.step
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};