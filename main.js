
// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato



$(document).ready(function()
{
  // Generiamo i 36 quadrattini

  var square = '<div class="square"></div>';

  for (var i=0; i < 36 ; i++){
    $('.container').append(square);
  }

  // Evento jQuery scatenato dal click

  $('.square').click(function()
  {
    var thisSquare = $(this);

    // Eseguiamo la Chiamata Ajax

    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data)

      {
        var numero = data.response;

        thisSquare.text(data.response);
        // console.log(data);

        // A seconda  del numero contenente il quadratino avrà il rispettivo colore
        if (numero <= 5) {
          $(thisSquare).addClass('greenbg');
        }
        else {
          $(thisSquare).addClass('yellowbg');
        };
      },
      error: function()
      {
        alert("non funzia");
      },

    });

  })

})
