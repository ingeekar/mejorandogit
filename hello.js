$(document).ready(function() {
    alert ("funcionando");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzghJLvbFvaJopeB2_hBW4lzVT60LzVC2xdIOmxlV1WwiqiikI/exec"
    }).then(function(data) {
        var datoUsuario = data[0].nombre;
        var sueldo =  data[0].sueldo;
       $('.nombre').append(datoUsuario);
       $('.sueldo').append(sueldo);
    });
});
