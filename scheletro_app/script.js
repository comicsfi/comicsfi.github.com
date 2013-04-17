
$(document).ready(function(){

  $('#show_mask').on('touchstart',function(e){
    e.stopPropagation();
    $.ui.showMask("ciao");
    console.log("Dentro touchstar del bottone");
  });

  $('body').on('touchstart',function(){
    $.ui.hideMask();
    console.log("Dentro touchstart del body");
  });



});
