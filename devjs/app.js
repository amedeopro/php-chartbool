var $ = require('jquery');
require('chart.js');

var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

$(document).ready(function(){

  $.ajax({
    url: 'http://localhost/php-chartbool/server.php',
    method: 'GET',
    success: function(data){

        var datiGrafico = JSON.parse(data);

        graficoLineGenerico($('#milestone-1'),mesi,'Primo Grafico a Linee', datiGrafico);

    },
    error: function(){
      alert('errore');
    }

  });

  $.ajax({
    url: 'http://localhost/php-chartbool/server-2.php',
    method: 'GET',
    success: function(data){

      var graficoLine = JSON.parse(data);
      var datigrafico = graficoLine['fatturato']['data'];

      graficoLineGenerico($('#milestone-2-line'),mesi,'Secondo Grafico a Linee', datigrafico);

    },
    error: function(){
      alert('errore');
    }

  })

});

function graficoLineGenerico(selettore, labels, title, risultato){
  var chart = new Chart(selettore, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
              label: title,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: risultato,
          }]
      },

      // Configuration options go here
      options: {}
  });
}
