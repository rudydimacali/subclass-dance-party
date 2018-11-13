var SpinningDancer = function(top, left, timeBetweenSteps) {
  // Create SpinningDancer as subclass of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="SpinningDancer"></span>');
  console.log()
  this.setPosition(top, left);
};

// Declare Dancer.prototype as the superclass
SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

// SpinningDancer.step function passing 'this' into Dancer.step
SpinningDancer.prototype.step = function() {
  return;
};