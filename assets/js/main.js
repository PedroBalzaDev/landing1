$( document ).ready(function() {
    console.log( "ready!" );
});

//Validacion mail
$.validator.addMethod("customemail",
function (value, element) {
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
},
"Ingresá una dirección de email"
);

$("#main_form").validate({
    rule:{
        'nombre':{
            required: true
        },
        'textarea':{
            required: true
        },
        'Email': {
            required: {
                depends: function () {
                    $(this).val($.trim($(this).val()));
                    return true;
                }
            },
            customemail: true
        },
    }
});