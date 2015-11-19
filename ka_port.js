$(document).ready(function() {
  var canvas = document.getElementById("my-drawing");
  new Processing(canvas, function(processing) {
    processing.setup = function() {
    processing.size(400,400);
      };
    processing.draw = function() {
      processing.background(219, 255, 255);
      processing.fill(161, 161, 161);
      processing.triangle(200, 28, 350, 150, 50, 150);
      processing.fill(255, 255, 255);
      processing.rect(60, 150, 280, 207);
      processing.stroke(179, 179, 179);
      for (var i = 0; i < 10; i++) {
        var theY = (i*20);
        processing.line(60,theY+150,340,theY+150);
      }
      processing.stroke(0, 0, 0);
      processing.fill(120, 80, 19);
      processing.rect(180, 280, 40, 77);
      processing.fill (100, 220, 250);
      for (var i = 0; i < 3; i++) {
        processing.rect(i+90+(i*94), 180, 30, 60);
      }
      processing.fill(78, 227, 48);
      for (var i = 0; i < 8; i++) {
        if (i%2 === 0) {
          processing.fill(34, 145, 56);
        } else {
          processing.fill(54, 191, 0);
        }
        processing.rect(i-1+(i*49),358,50,41);
      }
    };
  });
});
