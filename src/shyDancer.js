var ShyDancer = function(top, left, timeBetweenSteps) {
  // Create ShyDancer as subclass of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ShyDancer"></span>');
  this.setPosition(top, left);
};

// Declare Dancer.prototype as the superclass
ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

// ShyDancer.step function passing 'this' into Dancer.step
ShyDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this.$node.animate({
  // 	left: "-=10", top: "-=10"
  // }, "fast" ).animate({left: "+=10", top: "+=10"}, "fast");
  return;
};