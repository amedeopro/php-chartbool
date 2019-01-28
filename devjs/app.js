var $ = require('jquery');

$(document).ready(function(){

  $.ajax({
    url: 'http://localhost/php-chartbool/database.php',
    method: 'GET',
    success: function(data){

        primoGrafico(data);


    },
    error: function(){
      alert('errore');
    }

  })

})

function primoGrafico(data){
  var datiGrafico = JSON.parse(data);
  console.log(datiGrafico);
}
