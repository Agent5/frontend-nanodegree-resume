(function() {
    var canvas = document.getElementById('headerBackground'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.getElementsByClassName('.jumbotron').innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here

      // do my Trianglify stuff here
      var canvasHeight = $('.ctrlBckgrnd').height();
      console.log(canvasHeight);
      
      var pattern = Trianglify({
          width: window.innerWidth, 
          // height: window.innerHeight
          height: canvasHeight
      });
      pattern.canvas(document.getElementById('headerBackground'));
      // $('canvas').attr('width', width);
      // document.body.appendChild(pattern.canvas());

      // end my Trianglify stuff here
    }
})();