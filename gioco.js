

var larghezza_piano=1024-150-1;
var altezza_piano=768-150-1-20;

var x=100;
var y=100;
var v_x=7;
var v_y=3;

var ball = document.getElementById('ball');

function step(){

  ball.style.backgroundColor='rgb('+Math.floor(x/larghezza_piano*255)+','+Math.floor(y/altezza_piano*255)+',250)';
  x+=v_x;
  y+=v_y;

  if(x>larghezza_piano || x<=0)
  {
    v_x*=-1;
  }

  if(y>altezza_piano || y<=0)
  {
    v_y*=-1;
  }


  ball.style.left=x+'px';
  ball.style.top=y+'px';
  //ball.innerHTML="<br>X:" + x + "<br>Y:" + y;

}

window.setInterval(step,15);
