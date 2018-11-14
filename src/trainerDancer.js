var TrainerDancer = function(top, left, timeBetweenSteps) {
  // Create TrainerDancer as subclass of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="TrainerDancer"></span>');
  this.setPosition(top, left);
};

// Declare Dancer.prototype as the superclass
TrainerDancer.prototype = Object.create(Dancer.prototype);
TrainerDancer.prototype.constructor = TrainerDancer;

// TrainerDancer.step function passing 'this' into Dancer.step
TrainerDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this.$node.animate({
  //  left: "-=10", top: "-=10"
  // }, "fast" ).animate({left: "+=10", top: "+=10"}, "fast");
  return;
};

TrainerDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  // this.$node.css(styleSettings);
  this.$node.animate({top: `${top}`, left: `${left}`}, 1200);
};