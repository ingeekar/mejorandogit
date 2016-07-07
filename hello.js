$(document).ready(function() {
    alert ("funcionando");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzghJLvbFvaJopeB2_hBW4lzVT60LzVC2xdIOmxlV1WwiqiikI/exec"
    }).then(function(data) {
       $('.nombre').append(data.id);
       $('.sueldo').append(data.content);
    });
});
