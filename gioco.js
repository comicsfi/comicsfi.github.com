

larghezza_piano=document.height-50;
altezza_piano=document.width-50;

x=100;
y=100;
v_x=7;
v_y=2;

function step(){
   var ball = document.getElementById('ball');

   x+=v_x;
   y+=v_y;

   if(x>larghezza_piano || x<=0)
     v_x*=-1;

   if(y>altezza_piano || y<=0)
     v_y*=-1;
     

   ball.style.left=x+'px';
   ball.style.top=y+'px';
}

window.setInterval(step,15);
