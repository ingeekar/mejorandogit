$(document).ready(function() {
    alert ("funcionando");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzghJLvbFvaJopeB2_hBW4lzVT60LzVC2xdIOmxlV1WwiqiikI/exec"
    }).then(function(data) {
        for (i=0; i<=data.length; i++){
             $('.nombre').append(data[i].nombre +", ");
             $('.sueldo').append($.unique(data[i].salarioDiario +", "));
        }
        
      
       
      
    });
});
