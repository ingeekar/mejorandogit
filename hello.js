$(document).ready(function() {
    alert ("funcionando");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwyoKQ67qPseaPjvau7B5L6sa9i_F_8GOtnSvfeSfXJKZK620dF/exec"
    }).then(function(data) {
        for (i=0; i<=data.length; i++){
            var unique=[data[i].docente];
            for (j=0; j<=data.lenght; j++){
                if(!arreglo(j)==(unique)){
                  $('.nombre').append(data[i].docente +", ");  
                }
            }
            
        }
      
    });
});
