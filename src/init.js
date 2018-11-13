$(document).ready(function() {
  window.dancers = [];
  window.pikas = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($('body').height()*.5) * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    if (dancerMakerFunctionName === 'PikaDancer') {
      window.pikas.push(dancer);
    };
    window.dancers.push(dancer);
  });
  $('.lineUpButton').on('click', function(event) {
    var width = $('body').width() / (window.dancers.length + 2);
    var top = $('body').height() / 4;
    // Iterate over windows.dancers,
    for (var i = 0; i < window.dancers.length; i++) {
      // clearTimeout(window.dancers[i].prototype.step.schedule);
      var left = width * (i+1);
      // for each dancer, call setPosition(top,left)
      window.dancers[i].setPosition(top, left);
    }
  });

  $('.catchEmButton').on('click', function(event) {
    if (window.pikas.length > 0) {
      var dancer = new window.TrainerDancer(
        ($('body').height()*.5) * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer);      
    }
    for (var i = 0; i < window.pikas.length; i++) {
      var pikaTop = window.pikas[i].$node.css("top");
      var pikaLeft = window.pikas[i].$node.css("left");
      setTimeout(function() {window.dancers[window.dancers.length - 1].setPosition(pikaTop, pikaLeft)} , 2000);
            
    };
    
    // find position of this element
    // find all positions of pikachu elements
      // subract from this element
    // find position of nearest pika elements
    // set position to nearest pika
    // ???
  });
});

