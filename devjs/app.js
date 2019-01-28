var $ = require('jquery');

$(document).ready(function(){

  $.ajax({
    url: 'http://localhost/php-chartbool/database.php',
    method: 'GET',
    success: function(data){


       console.log(data);

    },
    error: function(){
      alert('errore');
    }

  })

})
