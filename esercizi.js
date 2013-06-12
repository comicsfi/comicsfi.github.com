var lista=[];

$(document).ready(function(){
  
  function avvia_esercizio(){
    window['esercizio_'+$(this).attr('esercizio')]();
  }

  $('button').click(avvia_esercizio);

});


function esercizio_1(){
  console.log("Esercizio 1");
}

function esercizio_2(){
} 

function esercizio_3(){
}
