var PikaDancer = function(top, left, timeBetweenSteps) {
  // Create PikaDancer as subclass of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="PikaDancer"></span>');
  this.setPosition(top, left);
};

// Declare Dancer.prototype as the superclass
PikaDancer.prototype = Object.create(Dancer.prototype);
PikaDancer.prototype.constructor = PikaDancer;

// PikaDancer.step function passing 'this' into Dancer.step
PikaDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this.$node.animate({
  // 	top: "-=50",
  // }, "slow" ).animate({top: "+=50"}, "fast");
  return;
};