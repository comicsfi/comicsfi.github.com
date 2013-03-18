
$(document).ready(function()
{
  console.log("Tutto il DOM è stato caricato!");

  var x = 250;
  var y = 250;
  var diametro = 150; 
  var ball = $('#ball');


  function sposta()
  {
    x = parseInt(Math.random()*(document.width-diametro));
    y = parseInt(Math.random()*(document.height-diametro));
    ball.css('left',x+'px');
    ball.css('top',y+'px');

  }

  $(document).on('mousemove',function(e){
    //e.preventDefault();
    //e.stopPropagation();
    var touchX = e.clientX;//e.originalEvent.targetTouches[0].clientX;
    var touchY = e.clientY;// e.originalEvent.targetTouches[0].clientY;
    if(touchX>x && touchX<x+diametro && touchY>y && touchY<y+diametro)
      sposta();
  });

});
