var BouncingDancer = function(top, left, timeBetweenSteps) {
  // Create BouncingDancer as subclass of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="BouncingDancer"></span>');
  this.setPosition(top, left);
};

// Declare Dancer.prototype as the superclass
BouncingDancer.prototype = Object.create(Dancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;

// BouncingDancer.step function passing 'this' into Dancer.step
BouncingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
  	top: "-=50",
  }, "slow" ).animate({top: "+=50"}, "fast");
};