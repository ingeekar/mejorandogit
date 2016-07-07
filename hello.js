$(document).ready(function() {
    alert ("funcionando");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzghJLvbFvaJopeB2_hBW4lzVT60LzVC2xdIOmxlV1WwiqiikI/exec"
    }).then(function(data) {
       $('.exec-nombre').append(data.id);
       $('.exec-sueldo').append(data.content);
    });
});
