(function() {
    var canvas = document.getElementById('headerBackground'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            // console.log(window.innerWidth);
            canvas.height = document.getElementsByClassName('.jumbotron').innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    // make Trianglify re-draw at a set interval
    setInterval(function() {resizeCanvas();}, 6000);

    function drawStuff() {
            // do your drawing stuff here

      // do my Trianglify stuff here
      // copy the current height of the canvas parent
      var canvasHeight = $('.ctrlBckgrnd').height();
      // console.log(canvasHeight);
      
      var pattern = Trianglify({
          width: window.innerWidth - 15, 
          // height: window.innerHeight
          height: canvasHeight,
          // x_colors: 'random'
          x_colors: 'random'
      });
      pattern.canvas(document.getElementById('headerBackground'));

      pattern.canvas(document.getElementById('navbarImage'));
      // $('canvas').attr('width', width);
      // document.body.appendChild(pattern.canvas());

      // end my Trianglify stuff here
    }
})();