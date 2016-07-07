$(document).ready(function() {
    alert ("funcionando");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwyoKQ67qPseaPjvau7B5L6sa9i_F_8GOtnSvfeSfXJKZK620dF/exec"
    }).then(function(data) {
        for (i=0; i<=data.length; i++){
             $('.nombre').append(data[i].docente +", ");
        }
        
        var unicos = $unique(data);
         $('.sueldo').append(unicos);
      
       
      
    });
});
